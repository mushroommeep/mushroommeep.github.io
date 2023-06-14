---
# the default layout is 'page'
icon: fas fa-archive
date: 2023-06-10 12:00:00 -500
order: 2
layout: post
toc: true
---
<style>
red { color: red ;font-weight:700; font-size:25px }
yellow { color: yellow }

.dynamic-title {visibility: hidden;}

.carousel {
  height: 400px;
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
  border-color: gray;
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
  background-color: gray;
}

.carousel--translate .carousel__slide:nth-of-type(1),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(1) {
  background-image: url("https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/353421767_1253015515582330_6448875641944718154_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=7Q3Lt2sp_koAX-EG29-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDlzLd7YwbDbsBwdOMqpZp4FAIEcwFj_kzupb4CUZb2DA&oe=648CAFF5");
  background-size: cover;
  background-position: center;
}
.carousel--translate .carousel__slide:nth-of-type(2),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(2) {
  background-image: url("https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/353751300_1253015622248986_6233250670680327558_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=93Ry2nZRr54AX-NeR0o&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBh_4eVzEbAsCbA0dZe0JGTk_sRuu-npVMi2MPRrhLu1g&oe=648CE157");
  background-size: cover;
  background-position: center;
}
.carousel--translate .carousel__slide:nth-of-type(3),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(3) {
  background-image: url("https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/353825871_1253015542248994_5093440771508833834_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=g--r3ygkadgAX_NeHer&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBEEicaP8QxiF2qP-H7c-LJ-0lfu3BPMxtU0DG54OxR4g&oe=648DEC7B");
  background-size: cover;
  background-position: center;
}
.carousel--translate .carousel__slide:nth-of-type(4),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(4) {
  background-image: url("https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/353676935_1253015588915656_2437547315397325582_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=zn0-dDPVCFcAX__9BZ4&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCU2n0ugdeOx7Dw_B4MEfzuivp9YVZI1ld_JlJvZra9cg&oe=648C6077");
  background-size: cover;
  background-position: center;
}
.carousel--translate .carousel__slide:nth-of-type(5),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(5) {
  background-image: url("https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/353640234_1253015578915657_4753618595846253185_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=FhNNnmal-6oAX-FAa9W&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCmyU9Iv9Vx9GjKTynjQ9r72Jq6pimDgQ9V31HusBtSfA&oe=648D2527");
  background-size: cover;
  background-position: center;
}

.carousel--translateS .carousel__slide:nth-of-type(1) {
  background-image: url("https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/353873837_1253085038908711_2558725042827278184_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=4J9wa-dVHe8AX-9HlNg&_nc_ht=scontent-lcy1-1.xx&oh=00_AfD7hkT9BYESk8pSWlZIRKa9b76DJG5XzHJSl_pK1e0k-A&oe=648E458F");
  background-size: cover;
  background-position: center;
}
.carousel--translateS .carousel__slide:nth-of-type(2) {
  background-image: url("https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/353633298_1253085032242045_5147823285003561513_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=EkyLliVlVwUAX94Q0Lo&_nc_ht=scontent-lcy1-1.xx&oh=00_AfAPO9fKlJVqdJwh1GByY0xfz71UBtf1Mcd7aG-lLkEiNg&oe=648D0ECD");
  background-size: cover;
  background-position: center;
}
.carousel--translateS .carousel__slide:nth-of-type(3) {
  background-image: url("https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/353846954_1253085022242046_3874298331246848577_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=T12FmefSbNAAX-U-j7w&_nc_ht=scontent-lcy1-2.xx&oh=00_AfAEfnFpm_x2Fq66Uol4Dz1R5NuAoNpm2cObXNGs3TYC3g&oe=648D9481");
  background-size: cover;
  background-position: center;
}
.carousel--translateS .carousel__slide:nth-of-type(4) {
  background-image: url("https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/353600709_1253085002242048_5326754945321599166_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=fnjG_YNbYoIAX9PJ2yy&_nc_ht=scontent-lcy1-1.xx&oh=00_AfA4HiGf-ZXe7b4ey1C5NuB_lzUV4YIM-e8kChC8fHW7Zw&oe=648C8B68");
  background-size: cover;
  background-position: center;
}
</style>

## **2021 - 2023 : Data Engineer / Data Analyst**

### **<red>Energy Data Insights</red>**

#### **Description**

 A system that helps users monitor and optimize their energy usage. The goal of the project is to design and develop a flexible and user-friendly dashboard that can track energy consumption and costs, as well as data corruption. 
 The goal is to optimize the brand's operations, increase revenue, and improve customer satisfaction through data-driven decision-making.

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
      </li>
      <li class="carousel__slide">
      </li>
      <li class="carousel__slide">
      </li>
      <li class="carousel__slide">
      </li>
      <li class="carousel__slide">
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


#### **Technolodgy Used**

* Azure Data Factory
* Microsoft Power BI
* Azure Functions
* .NET 6 (C#)
* Azure Sql Server
* Azure Batch Service
* Azure Blob Storage

#### **Responsibilities**

The project requires technical and design skills and knowledge of energy management and conservation.

1. Delve into the project's business requirements and operations, gaining a deep understanding and establishing clear definitions.
2. Architect data models, design ETL pipelines, and implement automated processes to ensure seamless data flow throughout the system.
3. Offer continuous maintenance and support for the implemented solutions, ensuring their smooth operation and longevity.
4. Craft data-driven dashboards using advanced analytics, enabling actionable insights and empowering data-informed decision-making.

**Example works:**
- Design and implement automated data retrieval mechanisms, seamlessly extracting information from multiple sources for streamlined data integration.
- Design a flawless database structure, optimizing organization and efficiency.
- Create robust data pipelines and schedule automatic refreshes, ensuring timely and consistent data updates throughout the system.
- Effortlessly compute measures and construct dynamic dashboards, delivering actionable insights with finesse.
  
### **<red>Commerce Data Insights</red>**

#### **Description**

The project involves creating a Power BI dashboard for a retail brand to provide real-time insights and analysis of key performance indicators (KPIs) such as sales trends, customer behavior, inventory levels, and operational efficiency.

<div class="carousel-container">
  <ul class="carousel my-carousel carousel--translateS">
    <input class="carousel__activator" type="radio" id="A" name="activator" checked="checked"/>
    <input class="carousel__activator" type="radio" id="B" name="activator"/>
    <input class="carousel__activator" type="radio" id="C" name="activator"/>
    <input class="carousel__activator" type="radio" id="D" name="activator"/>
    <div class="carousel__controls">
      <label class="carousel__control carousel__control--backward" for="D"></label>
      <label class="carousel__control carousel__control--forward" for="B"></label>
    </div>
    <div class="carousel__controls">
      <label class="carousel__control carousel__control--backward" for="A"></label>
      <label class="carousel__control carousel__control--forward" for="C"></label>
    </div>
    <div class="carousel__controls">
      <label class="carousel__control carousel__control--backward" for="B"></label>
      <label class="carousel__control carousel__control--forward" for="D"></label>
    </div>
    <div class="carousel__controls">
      <label class="carousel__control carousel__control--backward" for="C"></label>
      <label class="carousel__control carousel__control--forward" for="A"></label>
    </div>
    <li class="carousel__slide">
    </li>
    <li class="carousel__slide">
    </li>
    <li class="carousel__slide">
    </li>
    <li class="carousel__slide">
    </li>
    </li>
    <div class="carousel__indicators">
      <label class="carousel__indicator" for="A"></label>
      <label class="carousel__indicator" for="B"></label>
      <label class="carousel__indicator" for="C"></label>
      <label class="carousel__indicator" for="D"></label>
    </div>
  </ul>
</div>

#### **Technolodgy Used**

* Azure Data Factory
* Microsoft Power BI
* Azure Functions
* .NET 6 (C#)
* Azure Sql Server
* Azure Batch Service
* Azure Blob Storage

#### **Responsibilities**

1. Unveiling and defining the project's business requirements and operations.

2. Crafting data models, ETL pipelines, and automated data flow processes.

3. Ensuring continuous maintenance and support for the solutions.

4. Designing captivating data dashboards for insightful analysis.

**Example works:**
- Design a resilient database structure
- Create and configure data pipelines
- Calculate essential measures and generate compelling visualizations

## **2018 - 2020 : Software Engineer**

### **<red>Proces.s</red>**

#### **Description**

A cloud-based ERP (Enterprise Resource Planning) system tailor-made for the construction industry.

[Reference](https://process.uchida-it.co.jp/)

#### **Technolodgy Used**

```vb
Sub Main()
    'Built with VB.NET at its core
    Console.WriteLine("Hello, we use VB.NET!")
End Sub
```
```sql
-- SQL Server stands as the epitome of trustworthiness, guaranteeing reliability and security.
SELECT * FROM SQLServerDatabase.Table 
```

#### **Responsibilities**

1. Comprehend the project's business needs and operations.

2. Unravel the intricacies of the software's processing flow.

3. Based on business requirments, create a detail coding logic.

4. Develop a comprehensive unit test checklist derived from the system specifications and business requirements, ensuring thorough validation of every aspect.

5. Wrap up the task at hand.

**Example works:**

* Engage in the continuous upkeep, enhancement, and innovation of existing features while also forging new ones.

* Creating reports with Active Report or Excel Creator

* Migrate Data from Oracle to SQL Server

### **<red>Manshion 21 SMAW</red>**

#### **Description**

 A comprehensive management system for apartment buildings. Centralize essential information for association accounting, receptionist services, and more, streamlining operations and enhancing efficiency.

[Reference](https://www.mansion.uchida-it.co.jp/product)


#### **Technolodgy Used**

```c#
using System;

class Program
{
    static void Main()
    {   //Harnessing the power of C# at its core.
        Console.WriteLine("Hello, we use C#!");
}
```

```sql
-- Powered by SQL Server,the database system ensures efficient data management.
SELECT * FROM SQLServerDatabase.Table 
```

#### **Responsibilities**

1. Comprehend the project's business needs and operations.

2. Unravel the intricacies of the software's processing flow.

3. Based on business requirments, create a detail coding logic.

4. Develop a comprehensive unit test checklist derived from the system specifications and business requirements, ensuring thorough validation of every aspect.

5. Wrap up the task at hand.

**Example works:**

* At the forefront of the Database layer, my work lies in creating, maintaining, and modifying queries and data tables, ultimately delivering valuable data to the business layer.