const JAVASCRIPT = `console.log('hello world!');`
const PYTHON = `print('hello world!')`
const CPP = 
`#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}`

const JAVA =
`class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}`

const CSHARP =
`namespace HelloWorld
{
    class Hello {         
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");
        }
    }
}`

const C = 
`#include <stdio.h>

int main() {
   // printf() displays the string inside quotation
   printf("Hello, World!");
   return 0;
}`

const GO = 
`package main


import "fmt"

func main() {
    fmt.Println("hello world")
}`

const RUST =
`fn main() {
    println!("Hello World!");
}`

export default function getBoilerplate(language) {
    switch (language) {
        case 'Javascript':
            return JAVASCRIPT;
        case 'Python':
            return PYTHON;
        case 'C++':
            return CPP;
        case 'Java':
            return JAVA;
        case 'C#':
            return CSHARP;
        case 'Go':
            return GO;
        case 'Rust':
            return RUST;
        case 'C':
            return C;
        default:
            return '';
    }
}
