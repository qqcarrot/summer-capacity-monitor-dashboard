# Summer Capacity Monitor Dashboard

A portfolio project for a summer capacity planning monitor dashboard built for operations management, featuring multi-level drill-down, 40+ KPI visualization, and automated issue attribution.

## 1. Project Overview

This project showcases a summer capacity planning monitor dashboard designed for delivery operations management during peak season.  
The dashboard integrates planning targets and actual operational data into one unified view, helping managers quickly track progress, identify low-performing cities, and understand the reasons behind gaps.

## 2. Business Background

Summer is the peak season for delivery operations, with order volume typically increasing by 20%–30% compared with normal periods.  
To ensure sufficient rider capacity during peak season, annual capacity planning is conducted in advance for each city, including target rider scale, threshold values, and upper-limit goals.

Before this dashboard was built, monitoring capacity progress relied heavily on manually pulling data from multiple BI reports and combining them in Excel. This process was inefficient, inconsistent in metric definitions, and weak in root-cause analysis.

## 3. Core Problems

The project aimed to solve four key problems:

- **Scattered data sources**: planning data and actual performance data were stored in separate reports.
- **Lack of drill-down capability**: traditional reports mainly supported national or regional summaries, making city-level diagnosis difficult.
- **Weak trend visibility**: static Excel reports could not effectively support daily or weekly trend monitoring.
- **No attribution loop**: after identifying underperforming cities, further diagnosis still required manual analysis.

## 4. Solution

I designed and built a visual monitoring dashboard based on a NoCode platform to support summer capacity planning execution tracking.

The dashboard includes:

- Unified integration of planning and actual operation data
- National → Region → Area → City four-level drill-down
- Trend monitoring for 16 key indicators
- Detailed analysis table with 40+ metrics
- Automated issue and attribution tagging through rule-based logic

## 5. Dashboard Structure

The dashboard is designed with a dual-tab structure:

### Tab 1: Trend Monitoring
Used for macro-level judgment and progress tracking through visual charts.

Main focus:
- peak rider progress
- capacity achievement
- net rider growth
- service efficiency

### Tab 2: Detailed Diagnosis
Used for city-level analysis with filtering, comparison, and issue attribution.

Main features:
- date range filtering
- hierarchy-based filtering
- comparison-date analysis
- CSV export
- automated issue tags
- automated attribution tags

## 6. Data Structure

The dashboard combines two core datasets:

- **Actual data table**: 18,500+ rows of daily operational data
- **Planning data table**: 853 rows of city-level planning targets

These datasets are joined using **date + city** as keys, enabling comparison between actual performance and planning targets.

## 7. KPI System

The dashboard covers multiple business dimensions, including:

- supply and demand scale
- efficiency
- service experience
- capacity achievement
- rider quality
- net rider growth
- attendance
- support ratio

Example KPIs:
- peak rider progress
- effective rider count
- achievement rate
- rider efficiency
- on-time rate
- delivery duration
- net rider growth rate
- summer worker ratio

## 8. Key Highlights

### 1) Multi-level geographic drill-down
Supports analysis from national level down to city level, improving management visibility across different organizational layers.

### 2) Trend + detail combined
The dual-tab structure enables both macro-level trend observation and micro-level diagnosis.

### 3) Automated issue attribution
The dashboard includes rule-based tagging logic that automatically identifies problematic cities and suggests possible causes.

### 4) Improved decision efficiency
Compared with manual data pulling and Excel reporting, the dashboard significantly reduced the time needed to review operational progress.

## 9. Business Value

After launch, the dashboard became a core tool for reviewing summer capacity planning performance across regions and cities.

Business value included:
- reduced monitoring time from around 30 minutes per review to near-instant access
- unified metric definitions across management layers
- faster identification of low-achievement cities
- better support for targeted rider recruitment and incentive adjustments

## 10. My Role

In this project, I was responsible for:

- defining the monitoring framework and KPI structure
- organizing planning and actual data into a unified analysis view
- designing the dual-tab dashboard structure
- enabling multi-level geographic drill-down
- designing issue and attribution tagging logic
- supporting operation review and diagnosis workflows

## 11. Tools / Methods

- NoCode platform
- KPI system design
- dashboard design
- operational analysis
- rule-based attribution logic
- business monitoring framework

## 12. Screenshots

> Screenshots will be added here.

## 13. Why This Project Matters

This project reflects my ability to:

- identify real business problems
- structure KPI systems for operations management
- design data products for business users
- combine analysis logic with product thinking
- improve operational efficiency through dashboard-based tools
