# Things I did in this project:

## Setup

1. created new cloud9 workspace
2. created github repository
3. linked github repository to cloud9 workspace
    1. git init
    2. git add .
    3. git commit -m "[commit note]"
    4. git remote add origin git@github.com:[username]/[your repo.git]		(use SSH protocol)
    5. git push -u origin master
4. created github.sh
5. npm install -g express generator (use Express)
		or 
    1. express --css less --hogan
6. Cloned Simon's work into the workspace
7. npm install

## Work

* I renamed 'a.navbar-brand(href='/') Loc8r' to 'a.navbar-brand(href='/') Pizza Finder Deluxe' in the file layout.jade

* Made a copy of the 'locations.js' controller and renamed it 'pizza.js'

* I then edited the data in 'pizza.js' to reflect my own data, to demonstrate I understand what the elements do.

* In 'getting-MEAN/app_server/routes/index.js', I added new directories for the app, to make a new view called 'pizza'.

* In 'getting-MEAN/app_server/views/layout.jade', I added a link to the 'pizza' view.

* I also changed the color of the stars to #ffe200 (yellowish) in amelia.bootstrap.css, line 2565

* I changed the color of the tags to #a01111 (reddish) in amelia.bootstrap.css, line 5218

* I edited locations.js to reflect one of the venues listed in pizza.js, added reviews and edited geolocation data, as well as times the venue is open

## Extra notes:

__Linux commands cheat sheet__

### Common Linux Commands

Command | Description 
--- | --- 
cat [filename] | Display file’s contents to the standard output device (usually your monitor).
__cd /directorypath__ | Change to directory
chmod [options] mode filename | Change a file’s permissions.
chown [options] filename | Change who owns a file
__clear__ | Clear a command line screen/window for a fresh start.
cp [options] source destination | Copy files and directories.
date [options] | Display or set the system date and time.
df [options] | Display used and available disk space.
du [options] | Show how much space each file takes up.
file [options] filename | Determine what type of data is within a file.
find [pathname] [expression] | Search for files matching a provided pattern.
grep [options] pattern [filesname] | Search files or output for a particular pattern.
kill [options] pid | Stop a process. If the process refuses to stop, use kill -9 pid.
less [options] [filename] | View the contents of a file one page at a time.
ln [options] source [destination] | Create a shortcut.
locate filename | Search a copy of your filesystem for the specified filename.
lpr [options] | Send a print job.
__ls [options]__ | List directory contents.
man [command] | Display the help information for the specified command.
__mkdir [options] directory__ | Create a new directory.
mv [options] source destination | Rename or move file(s) or directories.
passwd [name [password]] | Change the password or allow (for the system administrator) to change any password.
ps [options] | Display a snapshot of the currently running processes.
__pwd__ | Display the pathname for the current directory.
rm [options] directory | Remove (delete) file(s) and/or directories.
rmdir [options] directory | Delete empty directories.
ssh [options] user@machine | Remotely log in to another Linux machine, over the network. Leave an ssh session by typing exit.
su [options] [user [arguments]] | Switch to another user account.
tail [options] [filename] | Display the last n lines of a file (the default is 10).
tar [options] filename | Store and extract files from a tarfile (.tar) or tarball (.tar.gz or .tgz).
top | Displays the resources being used on your system. Press q to exit.
touch filename | Create an empty file with the specified name.
who [options] | Display who is logged on.