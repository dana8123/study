# 리눅스 명령어
    리눅스에 명령어 등에 대해 공부하고 정리해 두는 공간입니다.
    아무래도.. 우분투를 쓰는 편이니까... (끄덕)
---
# 목차
- 아직 목차라고 할 만한건 없으므로 나중에 채운다.

----
### chown
- 회사에서 git pull 받고 실행하려고했는데, 실행이 안돼는 원인이 파일 중 하나의 소유자가 root였기 때문이었다.   
- 해당 파일의 owner를 내 계정으로 변경하였고, 권한또한 부여하니 해결되었다.  
    리눅스에서 파일은 Owner, Group가 존재한다.
    `chown` 명령어는 파일의 Owner, Gropu을 변경하는 명령어이다.


`chown [OPTIONS] USER[:GROUP] FILE(s)`  : 소유자나 그룹을 변경한다.  
`ls -I` : 파일의 소유자가 누구인지 보여준다.
```shell
➜  linux git:(main) ✗ ls -l
total 256
-rwxrwxrwx  1 coco  staff  493 Nov 22 23:03 readme.md
```
