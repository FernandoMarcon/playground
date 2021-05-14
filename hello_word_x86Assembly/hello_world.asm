; hello_world.asm
;
; Author: Fernando Marcon
; Date: 14-May-2020
; Source: https://www.youtube.com/watch?v=HgEGAaYdABA
; Run:
; nasm -f elf32 -o hello_world.o hello_world.asm
; ld -m elf_i386 -o hello_world hello_world.o
; ./hello_world

global _start

section .text:

_start:
	mov eax, 0x4	; use the write syscall
	mov ebx, 1	; use stdout as the fd
	mov ecx, message	; use the message as the buffer
	mov edx, message_length	; and supply the length
	int 0x80	; invoke the syscall

	; now gracefully exit

	mov eax, 0x1
	mov ebx, 0
	int 0x80

section .data:
	message: db "Hello World!", 0xA
	message_length equ $-message
