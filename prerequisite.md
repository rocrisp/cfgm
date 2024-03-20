
### Before you start, here's a simple guide if you're new to this:

#### 1. Setting Up on AWS Cloud: 
- First, you'll need to create an account with AWS ([Amazon Web Services](https://aws.amazon.com/ec2/?did=ap_card&trk=ap_card)) since you'll be running your application there. Think of AWS as a big online space where your application will live.
- Next, you'll need to register a domain name with AWS. It's like choosing an address on the internet where people can find your application. Follow this [Blog](https://medium.com/aws-in-plain-english/how-to-register-a-domain-name-with-amazon-80a1bf809859) to register a domain name.

#### 2. Preparing Your Tools:

Before we get to the main steps, you'll need to download some tools to your computer. We'll use these tools to carry out a series of actions automatically with something called an Ansible playbook. What this playbook does is pretty cool: it sets up a virtual machine (like a computer inside your computer), gets all the software your application needs, grabs a copy of your application, builds it (prepares it to run), and then puts it out there on the virtual machine for the world to use.

Open a command prompt window. If you're not sure what a command prompt is, take a look at this helpful [blog](https://support.intermedia.com/app/articles/detail/a_id/24969/~/what-is-a-command-prompt%3F-how-do-i-use-it-on-mac%3F#:~:text=The%20Terminal%20app%20is%20similar,search%20field%2C%20then%20click%20Terminal.) for an introduction. Next, you'll need to download some important tools:

- Ansible: Use this blog to install Ansible. [How to Install Ansible on macOS](https://medium.com/javarevisited/how-to-install-ansible-on-mac-2baf00d42466#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImFkZjVlNzEwZWRmZWJlY2JlZmE5YTYxNDk1NjU0ZDAzYzBiOGVkZjgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDA2MTM2MDk2NjAyOTQzOTkxMjciLCJlbWFpbCI6InJvc2UuY3Jpc3AuaW5mb0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzEwOTQ2NjIyLCJuYW1lIjoiUm9zZSBDcmlzcCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKY3d5OVZ4SmF4OU1hQUpPMWxxNEZVTG1qWS0waUhWMHA1VHl1cnNub2lFUT1zOTYtYyIsImdpdmVuX25hbWUiOiJSb3NlIiwiZmFtaWx5X25hbWUiOiJDcmlzcCIsImlhdCI6MTcxMDk0NjkyMiwiZXhwIjoxNzEwOTUwNTIyLCJqdGkiOiJlZWRjNjc2Y2IxZWVlMjcxN2E0MGMwNTZkZTc4NjQzYzgxMDkxZGFlIn0.xlhOZOnzpBPwT4wPZgEGOIGB2fEN5bEcWb-klUKx7Fge0C2q-3tQ7kCBQPDwBVKdwuaJRcEeLqJ-1ScxbFNVGMgp3SqAuxDI4s1q_OmxF9-6KHxmubGFimM4GQU2z_4vSytL123rrddIumu588HCD1mahS0W3X8A2_4dHaVOYXHNKCc4aKAsN3noSLtD4ug5U8OOMcWxzRteyHqeZfQjIOSDmN5Ie_0LLsnaDfTkwJ0uQ4IJER5yMhsMdaTXaexBPvBTpPYCg0eOhvKQYrMM2wL5t47u9DxHUJEkM_M0VVM-TE5NPedwtyhz_PEMQEwVLSs7pfYlLXfe0s9TW_6oZQ)
- Git : Use this blog to install Git. [Install Git on Windows and Mac](https://medium.com/@bharathirajatut/install-git-on-windows-and-mac-devops-series-2-64b528fe2570)

