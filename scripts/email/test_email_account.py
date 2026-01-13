#!/usr/bin/env python3
"""
Test script to check if hello@tavyro.ch email account exists
"""
import smtplib
import sys

def test_email_account(email_address):
    """Test if an email account exists by attempting to send to it"""
    mx_server = 'mx1.mail.hostpoint.ch'
    port = 25
    
    print(f"📧 Testing if {email_address} exists...")
    print(f"   Connecting to {mx_server}:{port}...")
    
    try:
        # Connect to mail server
        server = smtplib.SMTP(mx_server, port, timeout=10)
        server.set_debuglevel(0)
        
        # Say hello
        server.helo('test.local')
        server.ehlo('test.local')
        
        # Set sender first
        code1, msg1 = server.mail('test@example.com')
        if code1 != 250:
            print(f"⚠️  Could not set sender: {code1} {msg1}")
            server.quit()
            return None
        
        # Try to set recipient - this will fail if account doesn't exist
        code, message = server.rcpt(email_address)
        
        server.quit()
        
        # Check response code
        # 250 = success (account exists)
        # 550 = mailbox unavailable (account doesn't exist or other error)
        if code == 250:
            print(f"✅ SUCCESS: {email_address} EXISTS!")
            print(f"   Server response: {code} {message.decode() if isinstance(message, bytes) else message}")
            return True
        elif code == 550:
            print(f"❌ FAILED: {email_address} does NOT exist")
            print(f"   Server response: {code} {message.decode() if isinstance(message, bytes) else message}")
            return False
        else:
            print(f"⚠️  UNKNOWN: Server returned code {code}")
            print(f"   Server response: {message.decode() if isinstance(message, bytes) else message}")
            return None
            
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")
        return None

if __name__ == "__main__":
    result = test_email_account('hello@tavyro.ch')
    sys.exit(0 if result else 1)
