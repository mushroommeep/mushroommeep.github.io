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

.pic-ctn {
  width: 100vw;
  height: 200px;
}

@keyframes display {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  20% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(-200px);
    opacity: 0;
  }
}

.pic-ctn {
  position: relative;
  width: 100vw;
  height: 300px;
  margin-top: 15vh;
}

.pic-ctn > img {
  position: absolute;
  top: 0;
  left: calc(50% - 100px);
  opacity: 0;
  animation: display 10s infinite;
}

img:nth-child(2) {
  animation-delay: 2s;
}
img:nth-child(3) {
  animation-delay: 4s;
}
img:nth-child(4) {
  animation-delay: 6s;
}
img:nth-child(5) {
  animation-delay: 8s;
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

<div class="pic-ctn">
    <img src="https://picsum.photos/200/300?t=1" alt="" class="pic">
    <img src="https://picsum.photos/200/300?t=2" alt="" class="pic">
    <img src="https://picsum.photos/200/300?t=3" alt="" class="pic">
    <img src="https://picsum.photos/200/300?t=4" alt="" class="pic">
    <img src="https://picsum.photos/200/300?t=5" alt="" class="pic">
  </div>