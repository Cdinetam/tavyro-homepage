# Scripts

Utility scripts for the TaVyro Homepage project.

## 📁 Structure

### [`setup/`](setup/)
Setup scripts:
- `install_node.sh` - Install Node.js
- `setup_npm.sh` - Setup npm dependencies

### [`deployment/`](deployment/)
Deployment scripts:
- `check_deployment.sh` - Check deployment status
- `check_dns.sh` - Check DNS configuration
- `create_github_repo.sh` - Create GitHub repository

### [`email/`](email/)
Email configuration scripts:
- `check_email.sh` - Check email configuration
- `check_email_deliverability.sh` - Check email deliverability
- `test_email_account.py` - Test email account
- `create_email_account.py` - Create email account helper
- `auto_fix_dmarc.py` - Fix DMARC configuration
- `setup_outlook_auto.py` - Automated Outlook setup
- `configure_outlook.applescript` - AppleScript for Outlook
- Various shell scripts for email automation

## 🚀 Usage

### Setup Scripts

```bash
# Install Node.js
./scripts/setup/install_node.sh

# Setup npm dependencies
./scripts/setup/setup_npm.sh
```

### Deployment Scripts

```bash
# Check deployment status
./scripts/deployment/check_deployment.sh

# Check DNS configuration
./scripts/deployment/check_dns.sh
```

### Email Scripts

```bash
# Check email configuration
./scripts/email/check_email.sh

# Test email account
python3 scripts/email/test_email_account.py

# Fix DMARC configuration
python3 scripts/email/auto_fix_dmarc.py

# Setup Outlook
python3 scripts/email/setup_outlook_auto.py
```

## ⚠️ Important Notes

- All scripts should be run from the project root directory
- Make scripts executable: `chmod +x scripts/**/*.sh`
- Python scripts require Python 3.6+
- AppleScript only works on macOS

## 📝 Adding New Scripts

When adding new scripts:
1. Place them in the appropriate subdirectory
2. Make them executable: `chmod +x script.sh`
3. Add documentation to this README
4. Test thoroughly before committing
