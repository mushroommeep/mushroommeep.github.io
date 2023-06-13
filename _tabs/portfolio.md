---
# the default layout is 'page'
icon: fa-file-code-o
date: 2023-06-10 12:00:00 -500
order: 5
layout: post
toc: true
---
<style>
red { color: red ;font-weight:700; font-size:20px }
yellow { color: yellow }

.dynamic-title {visibility: hidden;}


#proj1 {
height: 600px;
  margin: 0;
  display: grid;
  grid-template-rows: 500px 100px;
  grid-template-columns: 1fr 30px 30px 30px 30px 30px 1fr;
  align-items: center;
  justify-items: center;
}

main#carousel {
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: 100vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  --items: 5;
  --middle: 3;
  --position: 1;
  pointer-events: none;
}

div.item {
  position: absolute;
  width: 300px;
  height: 400px;
  background-color: coral;
  --r: calc(var(--position) - var(--offset));
  --abs: max(calc(var(--r) * -1), var(--r));
  transition: all 0.25s linear;
  transform: rotateY(calc(-10deg * var(--r)))
    translateX(calc(-300px * var(--r)));
  z-index: calc((var(--position) - var(--abs)));
}

div.item:nth-of-type(1) {
  --offset: 1;
  background-color: #90f1ef;
}
div.item:nth-of-type(2) {
  --offset: 2;
  background-color: #ff70a6;
}
div.item:nth-of-type(3) {
  --offset: 3;
  background-color: #ff9770;
}
div.item:nth-of-type(4) {
  --offset: 4;
  background-color: #ffd670;
}
div.item:nth-of-type(5) {
  --offset: 5;
  background-color: #e9ff70;
}

input:nth-of-type(1) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}
input:nth-of-type(1):checked ~ main#carousel {
  --position: 1;
}

input:nth-of-type(2) {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}
input:nth-of-type(2):checked ~ main#carousel {
  --position: 2;
}

input:nth-of-type(3) {
  grid-column: 4 /5;
  grid-row: 2 / 3;
}
input:nth-of-type(3):checked ~ main#carousel {
  --position: 3;
}

input:nth-of-type(4) {
  grid-column: 5 / 6;
  grid-row: 2 / 3;
}
input:nth-of-type(4):checked ~ main#carousel {
  --position: 4;
}

input:nth-of-type(5) {
  grid-column: 6 / 7;
  grid-row: 2 / 3;
}
input:nth-of-type(5):checked ~ main#carousel {
  --position: 5;
}


</style>

## 2018 - 2020 : Software Engineer

### **<red>Proces.s</red>**

#### **Description**

a cloud-based ERP (Enterprise Resource Planning) system tailor-made for the construction industry.

[Reference](https://process.uchida-it.co.jp/)



#### Technolodgy Used

```vb
Sub Main()
    'VB.NET as the main language to develop the product.
    Console.WriteLine("Hello, we use VB.NET!")
End Sub
```
```sql
-- SQL Server is trusted 
SELECT * FROM SQLServerDatabase.Table 
```

#### Responsibilities

1. Understand the project's business requirements/operations.

2. Understand the processing flow of the developed software.
Based on business requirments, create a detail coding logic for it

Create unit test check list based on the system specifications and business requirements

Finish the task

Example works:

Maintaining, modifying existing features, creating new features

Creating reports using Active Report or Excel Creator

Migrate Data from Oracle to SQL Server

### **<red>Manshion 21 SMAW</red>**

#### **Description**

 A comprehensive management system for apartment buildings. Centralize essential information for association accounting, receptionist services, and more, streamlining operations and enhancing efficiency.

[Reference](https://www.mansion.uchida-it.co.jp/product)


#### Technolodgy Used

```c#
using System;

class Program
{
    static void Main()
    {   //C# as the main language to develop the product.
        Console.WriteLine("Hello, we use C#!");
}
```

```sql
-- SQL Server is trusted 
SELECT * FROM SQLServerDatabase.Table 
```

#### Responsibilities

1. Understand the project's business requirements/operations.

2. Understand the processing flow of the developed software.
Based on business requirments, create a detail coding logic for it

Create unit test check list based on the system specifications and business requirements

Finish the task

Example works:

working mostly with Database layer, create, maintain, modify queries, data table and return data for business layer

## 2021 - 2023 : Data Engineer / Data Analyst

<p>This carousel is created with HTML and CSS only.</p>

<div id="proj1">
  <input type="radio" name="position" checked />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <main id="carousel">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <main>
<div>