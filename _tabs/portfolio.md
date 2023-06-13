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
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider {
  width: 1000px;
  height: 100px;
  position: relative;
  background: white;
  box-shadow: 0 10px 20px -10px rgba(0,0,0,0.2);
  display: flex;
  overflow: hidden;
}
.slide {
  height: 100px;
  display: flex;
  align-items: center;
  animation: slideshow 8s linear infinite;
}
.slide img {
  height: 70px;
  padding: 0 30px 0 30px;
}
@keyframes slideshow {
  0% {transform: translateX(0);}
  100% {transform: translateX(-100%);}
}
.slider::before, .slider::after {
  height: 100px;
  width: 200px;
  position: absolute;
  content: "";
  background: linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%);
  z-index: 2;
}
.slider::before {
  left: 0;
  top: 0;
}
.slider::after {
  right:0;
  top:0;
  transform: rotateZ(180deg);
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

```C#
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

<div class="wrapper">
    <div class="slider">
    <div class="slide">
        <img src="logo1.png" />
        <img src="logo2.png" />
        <img src="logo3.png" />
        <img src="logo4.png" />
        <img src="logo5.png" />
        <img src="logo6.png" />
        <img src="logo7.png" />
    </div>
    <div class="slide">
        <img src="logo1.png" />
        <img src="logo2.png" />
        <img src="logo3.png" />
        <img src="logo4.png" />
        <img src="logo5.png" />
        <img src="logo6.png" />
        <img src="logo7.png" />
    </div>
    </div>
</div>