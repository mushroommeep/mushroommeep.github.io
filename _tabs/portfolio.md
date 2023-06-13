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

.carousel {
  height: 520px;
  width: 720px;
  overflow: hidden;
  text-align: center;
  position: relative;
  padding: 0;
  list-style: none;
}
.carousel__controls,
.carousel__activator {
  display: none;
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__track {
  transform: translateX(0%);
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__slide:nth-of-type(1) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__controls:nth-of-type(1) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__indicators .carousel__indicator:nth-of-type(1) {
  opacity: 1;
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__track {
  transform: translateX(-100%);
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__slide:nth-of-type(2) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__controls:nth-of-type(2) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__indicators .carousel__indicator:nth-of-type(2) {
  opacity: 1;
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__track {
  transform: translateX(-200%);
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__slide:nth-of-type(3) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__controls:nth-of-type(3) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__indicators .carousel__indicator:nth-of-type(3) {
  opacity: 1;
}
.carousel__activator:nth-of-type(4):checked ~ .carousel__track {
  transform: translateX(-300%);
}
.carousel__activator:nth-of-type(4):checked ~ .carousel__slide:nth-of-type(4) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(4):checked ~ .carousel__controls:nth-of-type(4) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(4):checked ~ .carousel__indicators .carousel__indicator:nth-of-type(4) {
  opacity: 1;
}
.carousel__activator:nth-of-type(5):checked ~ .carousel__track {
  transform: translateX(-400%);
}
.carousel__activator:nth-of-type(5):checked ~ .carousel__slide:nth-of-type(5) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(5):checked ~ .carousel__controls:nth-of-type(5) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(5):checked ~ .carousel__indicators .carousel__indicator:nth-of-type(5) {
  opacity: 1;
}
.carousel__control {
  height: 30px;
  width: 30px;
  margin-top: -15px;
  top: 50%;
  position: absolute;
  display: block;
  cursor: pointer;
  border-width: 5px 5px 0 0;
  border-style: solid;
  border-color: #fafafa;
  opacity: 0.35;
  outline: 0;
  z-index: 3;
}
.carousel__control:hover {
  opacity: 1;
}
.carousel__control--backward {
  left: 10px;
  transform: rotate(-135deg);
}
.carousel__control--forward {
  right: 10px;
  transform: rotate(45deg);
}
.carousel__indicators {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}
.carousel__indicator {
  height: 15px;
  width: 15px;
  border-radius: 100%;
  display: inline-block;
  z-index: 2;
  cursor: pointer;
  opacity: 0.35;
  margin: 0 2.5px 0 2.5px;
}
.carousel__indicator:hover {
  opacity: 0.75;
}
.carousel__track {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  transition: transform 0.5s ease 0s;
}
.carousel__track .carousel__slide {
  display: block;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
}
.carousel__track .carousel__slide:nth-of-type(1) {
  transform: translateX(0%);
}
.carousel__track .carousel__slide:nth-of-type(2) {
  transform: translateX(100%);
}
.carousel__track .carousel__slide:nth-of-type(3) {
  transform: translateX(200%);
}
.carousel__track .carousel__slide:nth-of-type(4) {
  transform: translateX(300%);
}
.carousel__track .carousel__slide:nth-of-type(5) {
  transform: translateX(400%);
}
.carousel--scale .carousel__slide {
  transform: scale(0);
}
.carousel__slide {
  height: 100%;
  position: absolute;
  overflow-y: auto;
  opacity: 0;
}
/**
  * Theming
*/
* {
  box-sizing: border-box;
}
.carousel-container {
  display: inline-block;
}
.my-carousel {
  border-radius: 5px;
  margin: 30px;
}
.carousel__slide {
  overflow: hidden;
}
.carousel--thumb .carousel__indicator {
  height: 30px;
  width: 30px;
}
.carousel__indicator {
  background-color: #fafafa;
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

  <div class="carousel-container">
  <div class="carousel my-carousel carousel--translate">
    <input class="carousel__activator" type="radio" name="carousel" id="F" checked="checked"/>
    <input class="carousel__activator" type="radio" name="carousel" id="G"/>
    <input class="carousel__activator" type="radio" name="carousel" id="H"/>
    <input class="carousel__activator" type="radio" name="carousel" id="I"/>
    <input class="carousel__activator" type="radio" name="carousel" id="J"/>
    <div class="carousel__controls">
      <label class="carousel__control carousel__control--backward" for="J"></label>
      <label class="carousel__control carousel__control--forward" for="G"></label>
    </div>
    <div class="carousel__controls">
      <label class="carousel__control carousel__control--backward" for="F"></label>
      <label class="carousel__control carousel__control--forward" for="H"></label>
    </div>
    <div class="carousel__controls">
      <label class="carousel__control carousel__control--backward" for="G"></label>
      <label class="carousel__control carousel__control--forward" for="I"></label>
    </div>
    <div class="carousel__controls">
      <label class="carousel__control carousel__control--backward" for="H"></label>
      <label class="carousel__control carousel__control--forward" for="J"></label>
    </div>
    <div class="carousel__controls">
      <label class="carousel__control carousel__control--backward" for="I"></label>
      <label class="carousel__control carousel__control--forward" for="F"></label>
    </div>
    <div class="carousel__track">
      <li class="carousel__slide">
        <h1>Overview</h1>
        <img src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/353421767_1253015515582330_6448875641944718154_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=7Q3Lt2sp_koAX-EG29-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDlzLd7YwbDbsBwdOMqpZp4FAIEcwFj_kzupb4CUZb2DA&oe=648CAFF5" alt="" class="pic">
      </li>
      <li class="carousel__slide">
        <h1>Deviations</h1>
        <img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/353751300_1253015622248986_6233250670680327558_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=93Ry2nZRr54AX-NeR0o&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBh_4eVzEbAsCbA0dZe0JGTk_sRuu-npVMi2MPRrhLu1g&oe=648CE157" alt="" class="pic">
      </li>
      <li class="carousel__slide">
        <h1>ConsumptionChange</h1>
        <img src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/353825871_1253015542248994_5093440771508833834_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=g--r3ygkadgAX_NeHer&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBEEicaP8QxiF2qP-H7c-LJ-0lfu3BPMxtU0DG54OxR4g&oe=648DEC7B" alt="" class="pic">
      </li>
      <li class="carousel__slide">
        <h1>Consumption Pattern</h1>
       <img src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/353676935_1253015588915656_2437547315397325582_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=zn0-dDPVCFcAX__9BZ4&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCU2n0ugdeOx7Dw_B4MEfzuivp9YVZI1ld_JlJvZra9cg&oe=648C6077" alt="" class="pic">
      </li>
      <li class="carousel__slide">
        <h1>Weather</h1>
        <img src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/353640234_1253015578915657_4753618595846253185_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=FhNNnmal-6oAX-FAa9W&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCmyU9Iv9Vx9GjKTynjQ9r72Jq6pimDgQ9V31HusBtSfA&oe=648D2527" alt="" class="pic">
      </li>
    </div>
    <div class="carousel__indicators">
      <label class="carousel__indicator" for="F"></label>
      <label class="carousel__indicator" for="G"></label>
      <label class="carousel__indicator" for="H"></label>
      <label class="carousel__indicator" for="I"></label>
      <label class="carousel__indicator" for="J"></label>
    </div>
  </div>
</div>