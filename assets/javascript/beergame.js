Last login: Tue Aug  8 11:14:21 on ttys000
bobs-MacBook-Pro-2:~ bobkwiencien$ pwd
/Users/bobkwiencien
bobs-MacBook-Pro-2:~ bobkwiencien$ cd BootCamp/Fridge/
bobs-MacBook-Pro-2:Fridge bobkwiencien$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	assets/javascript/
	bilalCode

no changes added to commit (use "git add" and/or "git commit -a")
bobs-MacBook-Pro-2:Fridge bobkwiencien$ git add index.html 
bobs-MacBook-Pro-2:Fridge bobkwiencien$ git add assets/javascript/fridge.js 
bobs-MacBook-Pro-2:Fridge bobkwiencien$ date
Tue Aug  8 12:38:07 EDT 2017
bobs-MacBook-Pro-2:Fridge bobkwiencien$ git commit -m "Aug8-12:38"
[master abd91c7] Aug8-12:38
 2 files changed, 24 insertions(+), 22 deletions(-)
 create mode 100644 assets/javascript/fridge.js
bobs-MacBook-Pro-2:Fridge bobkwiencien$ git push origin master
Counting objects: 6, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 901 bytes | 0 bytes/s, done.
Total 6 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/bkwiencien/Fridge.git
   edc40cc..abd91c7  master -> master
bobs-MacBook-Pro-2:Fridge bobkwiencien$ pwd
/Users/bobkwiencien/BootCamp/Fridge
bobs-MacBook-Pro-2:Fridge bobkwiencien$ 
  [Restored]
Last login: Tue Aug  8 12:49:59 on ttys001
bobs-MacBook-Pro-2:Fridge bobkwiencien$ pwd
/Users/bobkwiencien/BootCamp/Fridge
bobs-MacBook-Pro-2:Fridge bobkwiencien$ cd ..
bobs-MacBook-Pro-2:BootCamp bobkwiencien$ git clone https://github.com/bkwiencien/Beer-Game.git
Cloning into 'Beer-Game'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
bobs-MacBook-Pro-2:BootCamp bobkwiencien$ cd
bobs-MacBook-Pro-2:~ bobkwiencien$ cd BootCamp/
bobs-MacBook-Pro-2:BootCamp bobkwiencien$ cd Beer-Game/
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls
README.md
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ pwd
/Users/bobkwiencien/BootCamp/Beer-Game
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls
README.md	beer.html
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ mkdir -p assets/css assets/javascript assets/images assets/audio
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls
README.md	assets		beer.html
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ pwd
/Users/bobkwiencien/BootCamp/Beer-Game
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ mv beer.html index.html
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ pwd
/Users/bobkwiencien/BootCamp/Beer-Game
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls
README.md	assets		index.html
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ pwd
/Users/bobkwiencien/BootCamp/Beer-Game
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ vi index.html 
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ pwd
/Users/bobkwiencien/BootCamp/Beer-Game
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ exit
logout

[Process completed]

  [Restored]
Last login: Tue Aug  8 15:07:24 on console
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ 
  [Restored]
Last login: Wed Aug  9 11:08:58 on console
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ pwd
/Users/bobkwiencien/BootCamp/Beer-Game
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ 
  [Restored]
Last login: Wed Aug  9 11:08:59 on ttys000
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ pwd
/Users/bobkwiencien/BootCamp/Beer-Game
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ vi index.html 
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ l;s
-bash: l: command not found
-bash: s: command not found
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls
2-1-10018.mp3	README.md	assets		index.html
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls assets/css/
style.css
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ vi assets/css/style.css 
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ 
  [Restored]
Last login: Wed Aug  9 11:57:17 on console
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ pwd
/Users/bobkwiencien/BootCamp/Beer-Game
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   assets/css/style.css
	modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	2-1-10018.mp3

no changes added to commit (use "git add" and/or "git commit -a")
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ git add index.html 
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ git add assets/css/style.css 
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ date
Wed Aug  9 12:18:13 EDT 2017
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ git commit -m "Aug9-12:18"
[master 6738ebc] Aug9-12:18
 2 files changed, 25 insertions(+), 22 deletions(-)
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ git push origin master
Counting objects: 6, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 770 bytes | 0 bytes/s, done.
Total 6 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/bkwiencien/Beer-Game.git
   40d957b..6738ebc  master -> master
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ cd ..
bobs-MacBook-Pro-2:BootCamp bobkwiencien$ pwd
/Users/bobkwiencien/BootCamp
bobs-MacBook-Pro-2:BootCamp bobkwiencien$ git clone https://github.com/bkwiencien/Bridge.git
Cloning into 'Bridge'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
bobs-MacBook-Pro-2:BootCamp bobkwiencien$ cd Beer-Game/
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls
2-1-10018.mp3	README.md	assets		index.html
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls assets/javascript/
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls assets/javascript/
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls
2-1-10018.mp3	README.md	assets		beergame.js	index.html
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls
2-1-10018.mp3	README.md	assets		beergame.js	index.html
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ pwd
/Users/bobkwiencien/BootCamp/Beer-Game
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ rm beergame.js 
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls assets/javascript/
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls assets/javascript/
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls
2-1-10018.mp3	README.md	assets		index.html
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ pwd
/Users/bobkwiencien/BootCamp/Beer-Game
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls
2-1-10018.mp3	README.md	assets		index.html
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ ls assets/javascript/
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ pwd
/Users/bobkwiencien/BootCamp/Beer-Game
bobs-MacBook-Pro-2:Beer-Game bobkwiencien$ pwd
