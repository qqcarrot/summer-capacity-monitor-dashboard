# Summer Capacity Monitor Dashboard

A portfolio project for a summer capacity planning monitor dashboard built for delivery operations management, featuring multi-level drill-down, 40+ KPI visualization, and automated issue attribution.

---

## Project Overview

This project presents a summer capacity planning monitor dashboard designed to support delivery operations management during peak season.

The dashboard integrates planning targets and actual operational data into one unified monitoring view, helping managers quickly track progress, identify underperforming cities, and understand the reasons behind operational gaps.

Rather than serving as a static reporting page, this project was designed as a structured monitoring tool combining trend observation, detailed diagnosis, and issue attribution.

---

## Business Background

Summer is the peak season for delivery operations, with order volume typically increasing by 20%–30% compared with normal periods.  
To ensure sufficient rider capacity during this period, annual capacity planning is carried out in advance for each city, including target rider scale, threshold values, and upper-limit goals.

Before this dashboard was built, monitoring capacity progress relied heavily on manually pulling data from multiple BI reports and combining them in Excel. This process was inefficient, inconsistent in metric definitions, and weak in root-cause diagnosis.

---

## Core Problems

This project aimed to solve four key operational problems:

### 1. Scattered data sources
Planning data and actual operational data were stored in separate BI reports, making unified analysis difficult.

### 2. Limited drill-down capability
Traditional reports mainly supported national or regional summaries, but lacked the ability to quickly drill down into city-level performance.

### 3. Weak trend visibility
Static Excel reports only showed snapshots of one point in time, making it difficult to judge whether execution was improving or deteriorating over time.

### 4. No attribution loop
Even after identifying underperforming cities, managers still had to manually investigate causes, which slowed down decision-making.

---

## Solution

I designed and built a visual monitoring dashboard based on a NoCode platform to support execution tracking for summer capacity planning.

The dashboard integrates planning and actual operational data into one unified view, and supports:

- multi-level geographic drill-down
- trend-based monitoring
- city-level diagnosis
- automated issue tagging
- automated attribution logic

This project turns a fragmented manual reporting process into a structured monitoring and diagnosis workflow.

---

## Dashboard Structure

The dashboard follows a dual-tab structure:

### 1. Trend Monitoring
Used for macro-level judgment and progress tracking through visual charts.

This section helps answer questions like:

- Is peak rider progress improving steadily?
- Is achievement rate trending downward?
- Is rider growth sufficient for peak season demand?
- Is service efficiency staying within a healthy range?

### 2. Detailed Diagnosis
Used for city-level analysis with filtering, comparison, and issue attribution.

This section supports:

- date range filtering
- hierarchy selection
- region/city filtering
- comparison-date analysis
- CSV export
- issue identification and attribution tagging

Together, these two tabs support both strategic monitoring and operational diagnosis.

---

## Data Structure

The dashboard combines two core datasets:

### Actual data table
- 18,500+ rows
- daily operational data
- includes region, city, rider count, efficiency, delivery duration, on-time rate, net rider growth, and other 40+ indicators

### Planning data table
- 853 rows
- city-level planning targets
- includes peak rider target, threshold value, upper limit, target efficiency, and planning support ratio

These two datasets are joined using **date + city** as keys, enabling direct comparison between actual performance and planning targets.

---

## KPI Framework

The dashboard covers multiple operational dimensions, including:

- supply and demand scale
- efficiency
- service experience
- capacity achievement
- rider quality
- net rider growth
- attendance
- support ratio

Examples of key KPIs include:

- peak rider progress
- effective rider count
- threshold achievement rate
- upper-limit achievement rate
- rider efficiency
- delivery duration
- on-time rate
- net rider growth
- summer worker ratio

The KPI framework was designed not only for monitoring performance, but also for helping managers move from “seeing numbers” to “understanding problems”.

---

## Key Highlights

### 1. Four-level geographic drill-down
The dashboard supports analysis from **national → region → area → city**, enabling different management layers to focus on their own scope while keeping a unified data view.

### 2. Trend + detail combined
The dual-tab design balances macro-level monitoring and micro-level diagnosis, allowing users to move from trend observation to city-level analysis in one workflow.

### 3. Automated issue attribution
A rule-based tagging system automatically generates issue labels and attribution labels, helping users quickly identify what the problem is and where it may come from.

### 4. Structured operational review workflow
This project transforms fragmented manual reporting into a structured operational review tool with unified metrics and repeatable diagnosis logic.

---

## Business Value

After launch, the dashboard became a core tool for reviewing summer capacity planning execution across regions and cities.

Its business value included:

- reducing review time from around 30 minutes per analysis to near-instant access
- improving consistency of KPI definitions across management layers
- accelerating identification of underperforming cities
- supporting targeted rider recruitment and incentive adjustment strategies
- improving overall efficiency of planning review and operational follow-up

---

## My Role

In this project, I was mainly responsible for:

- defining the monitoring framework and KPI system
- organizing planning and actual data into a unified analysis structure
- designing the dual-tab dashboard architecture
- supporting multi-level geographic drill-down
- designing issue identification and attribution logic
- improving review efficiency through dashboard-based monitoring

---

## Why This Project Matters

This project reflects my ability to:

- identify real business problems in operations scenarios
- translate monitoring needs into structured KPI systems
- combine business analysis with product thinking
- design dashboard-based tools for decision support
- improve operational efficiency through data products

For me, this project is not only a dashboard case, but also a demonstration of how business analysis, product design, and operational execution can be connected in one practical solution.

---

## Screenshots

### Project Overview
![Project Overview](./screenshots/overview.png)

### Trend Monitoring
![Trend Monitoring](./screenshots/trend-monitoring.png)

### Detailed Diagnosis
![Detailed Diagnosis](./screenshots/detailed-diagnosis.png)

### Automated Issue Attribution
![Issue Attribution](./screenshots/issue-attribution.png)

### Project Highlights
![Project Highlights](./screenshots/project-highlights.png)

---

## Tools / Methods

- NoCode platform
- dashboard design
- KPI framework design
- operational analysis
- rule-based issue attribution
- multi-level monitoring architecture

---

## Future Improvements

Possible future directions for this project include:

- adding a more interactive online portfolio page
- visualizing attribution logic in a more productized way
- expanding diagnosis from descriptive monitoring to recommendation generation
- integrating AI-generated summary for faster operational review

---

## Contact / Portfolio Note

This repository is part of my portfolio for operations, business analysis, and product-related roles.  
It is intended to demonstrate how I approach real business problems through structured monitoring, KPI design, and productized analysis workflows.
