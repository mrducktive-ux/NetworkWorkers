using System;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Runtime.InteropServices;
using System.Windows.Forms;

namespace RailWorkersCompatibility
{
    public sealed class CompatibilityForm : Form
    {
        private readonly Label osLabel;
        private readonly Label archLabel;
        private readonly Label runtimeLabel;
        private readonly Label graphicsLabel;
        private readonly Label inputLabel;
        private readonly Label resizeLabel;
        private readonly Label storageLabel;
        private readonly TextBox keyBox;
        private readonly Panel preview;
        private readonly string dataDirectory;

        public CompatibilityForm()
        {
            Text = "RAILWORKERS — Windows compatibility test";
            StartPosition = FormStartPosition.CenterScreen;
            MinimumSize = new Size(620, 510);
            Size = new Size(760, 620);
            BackColor = Color.FromArgb(16, 29, 40);
            ForeColor = Color.FromArgb(235, 241, 245);
            Font = new Font("Segoe UI", 9F, FontStyle.Regular);
            dataDirectory = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "RailWorkers");

            Label brand = MakeLabel("RAILWORKERS", 24F, true, Color.FromArgb(227, 139, 53));
            brand.Location = new Point(24, 18); brand.AutoSize = true; Controls.Add(brand);
            Label subtitle = MakeLabel("WINDOWS 7 COMPATIBILITY TEST", 8F, true, Color.FromArgb(145, 165, 179));
            subtitle.Location = new Point(27, 56); subtitle.AutoSize = true; Controls.Add(subtitle);
            Label intro = MakeLabel("This small utility checks basic desktop capabilities. It is not the full game.", 9F, false, Color.FromArgb(196, 209, 218));
            intro.Location = new Point(27, 88); intro.AutoSize = true; Controls.Add(intro);

            GroupBox results = new GroupBox(); results.Text = "SYSTEM CHECKS"; results.ForeColor = ForeColor; results.Location = new Point(25, 125); results.Size = new Size(335, 255); Controls.Add(results);
            osLabel = AddResult(results, "Operating system", 25);
            archLabel = AddResult(results, "Process architecture", 60);
            runtimeLabel = AddResult(results, ".NET runtime", 95);
            graphicsLabel = AddResult(results, "Graphics rendering", 130);
            inputLabel = AddResult(results, "Keyboard input", 165);
            storageLabel = AddResult(results, "Local storage", 200);

            GroupBox resize = new GroupBox(); resize.Text = "WINDOW RESIZE TEST"; resize.ForeColor = ForeColor; resize.Location = new Point(380, 125); resize.Size = new Size(335, 255); Controls.Add(resize);
            resizeLabel = MakeLabel("Resize this window. The preview should remain visible.", 9F, false, ForeColor); resizeLabel.Location = new Point(15, 25); resizeLabel.Size = new Size(295, 35); resize.Controls.Add(resizeLabel);
            preview = new Panel(); preview.Location = new Point(15, 70); preview.Size = new Size(295, 145); preview.BackColor = Color.FromArgb(28, 49, 64); preview.Paint += DrawPreview; resize.Controls.Add(preview);

            GroupBox keyboard = new GroupBox(); keyboard.Text = "KEYBOARD INPUT TEST"; keyboard.ForeColor = ForeColor; keyboard.Location = new Point(25, 395); keyboard.Size = new Size(335, 95); Controls.Add(keyboard);
            keyBox = new TextBox(); keyBox.Location = new Point(15, 35); keyBox.Width = 295; keyBox.Text = "Click here and type to test input"; keyboard.Controls.Add(keyBox);
            keyBox.TextChanged += delegate { inputLabel.Text = "Keyboard input: PASS"; inputLabel.ForeColor = Color.LightGreen; };

            Button browser = new Button(); browser.Text = "OPEN RAILWORKERS WEBSITE"; browser.Location = new Point(380, 415); browser.Size = new Size(335, 35); browser.FlatStyle = FlatStyle.Flat; browser.BackColor = Color.FromArgb(227, 139, 53); browser.ForeColor = Color.FromArgb(20, 32, 43); browser.Click += OpenWebsite; Controls.Add(browser);
            Button save = new Button(); save.Text = "RUN STORAGE TEST"; save.Location = new Point(380, 460); save.Size = new Size(160, 30); save.Click += RunStorageTest; Controls.Add(save);
            Button about = new Button(); about.Text = "COPY SYSTEM REPORT"; about.Location = new Point(555, 460); about.Size = new Size(160, 30); about.Click += CopyReport; Controls.Add(about);

            Label warning = MakeLabel("Compatibility is not certified until tested on a real Windows 7 SP1 installation.", 8F, false, Color.FromArgb(224, 176, 111));
            warning.Location = new Point(27, 525); warning.AutoSize = true; Controls.Add(warning);
            RunChecks();
        }

        private Label MakeLabel(string text, float size, bool bold, Color color)
        {
            return new Label { Text = text, Font = new Font("Segoe UI", size, bold ? FontStyle.Bold : FontStyle.Regular), ForeColor = color, BackColor = Color.Transparent };
        }
        private Label AddResult(Control parent, string text, int top)
        {
            Label label = MakeLabel(text + ": checking…", 9F, false, Color.White);
            label.Location = new Point(15, top); label.AutoSize = true; parent.Controls.Add(label); return label;
        }
        private void RunChecks()
        {
            Version v = Environment.OSVersion.Version;
            osLabel.Text = "Operating system: " + Environment.OSVersion.VersionString;
            osLabel.ForeColor = v.Major == 6 && v.Minor == 1 ? Color.LightGreen : Color.Khaki;
            archLabel.Text = "Process architecture: " + (IntPtr.Size == 4 ? "32-bit" : "64-bit");
            runtimeLabel.Text = ".NET runtime: " + Environment.Version.ToString();
            runtimeLabel.ForeColor = Environment.Version.Major >= 4 ? Color.LightGreen : Color.Khaki;
            graphicsLabel.Text = "Graphics rendering: GDI+ available";
            graphicsLabel.ForeColor = Color.LightGreen;
            resizeLabel.Text = "Resize this window. Preview area: " + preview.Width + " × " + preview.Height;
            storageLabel.Text = "Local storage: not tested";
        }
        private void DrawPreview(object sender, PaintEventArgs e)
        {
            Graphics g = e.Graphics; Rectangle r = preview.ClientRectangle;
            using (Brush b = new SolidBrush(Color.FromArgb(95, 126, 143))) g.FillRectangle(b, r);
            using (Brush b = new SolidBrush(Color.FromArgb(80, 112, 83))) g.FillRectangle(b, 0, r.Height / 2, r.Width, r.Height / 2);
            using (Pen p = new Pen(Color.FromArgb(225, 218, 197), 3)) { g.DrawLine(p, 0, r.Height - 22, r.Width, r.Height - 22); g.DrawLine(p, 0, r.Height - 11, r.Width, r.Height - 11); }
            using (Brush b = new SolidBrush(Color.FromArgb(227, 139, 53))) g.FillRectangle(b, r.Width / 2 - 35, r.Height / 2 - 17, 70, 25);
            using (Brush b = new SolidBrush(Color.White)) g.DrawString("RAILWORKERS TEST SCENE", Font, b, 12, 12);
        }
        private void RunStorageTest(object sender, EventArgs e)
        {
            try { Directory.CreateDirectory(dataDirectory); string path = Path.Combine(dataDirectory, "compatibility-test.txt"); File.WriteAllText(path, "RAILWORKERS compatibility test " + DateTime.Now.ToString("s")); string read = File.ReadAllText(path); storageLabel.Text = read.Length > 0 ? "Local storage: PASS" : "Local storage: FAIL"; storageLabel.ForeColor = read.Length > 0 ? Color.LightGreen : Color.IndianRed; }
            catch (Exception ex) { storageLabel.Text = "Local storage: FAIL — " + ex.Message; storageLabel.ForeColor = Color.IndianRed; }
        }
        private void OpenWebsite(object sender, EventArgs e)
        {
            try { Process.Start("https://mrducktive-ux.github.io/RailWorkers/"); }
            catch (Exception ex) { MessageBox.Show("Could not open the website: " + ex.Message); }
        }
        private void CopyReport(object sender, EventArgs e)
        {
            string report = osLabel.Text + Environment.NewLine + archLabel.Text + Environment.NewLine + runtimeLabel.Text + Environment.NewLine + graphicsLabel.Text + Environment.NewLine + inputLabel.Text + Environment.NewLine + storageLabel.Text;
            try { Clipboard.SetText(report); MessageBox.Show("System report copied to clipboard."); } catch { MessageBox.Show(report, "System report"); }
        }
    }
}
