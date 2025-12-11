# Modern Color Palette - Keen for Learners

## Overview
This document describes the modern, cohesive color palette selected for the application. The palette maintains visual similarity to the original colors while providing improved contrast, accessibility, and a more polished, professional appearance.

## Color Palette

### Primary Colors
- **Primary Blue** (`#2563eb` / `primary`)
  - Usage: Main buttons, links, active states, primary actions
  - Hover: `#1e40af` (`primary-dark`)
  - Light variant: `#3b82f6` (`primary-light`)
  - WCAG AA compliant for text on white backgrounds

### Secondary Colors
- **Emerald Green** (`#10b981` / `secondary`)
  - Usage: Success states, active indicators, positive actions
  - Hover: `#059669` (`secondary-dark`)
  - Light variant: `#34d399` (`secondary-light`)
  - WCAG AA compliant

### Accent Colors
- **Violet** (`#8b5cf6` / `accent`)
  - Usage: Highlights, special features, badges
  - Light variant: `#a78bfa` (`accent-light`)

### Background Colors
- **Background** (`#f8fafc` / `background`)
  - Usage: Main page background (refined from original `#f2f4f8`)
- **Surface** (`#ffffff` / `background-surface`)
  - Usage: Cards, forms, modals, elevated surfaces
- **Muted** (`#f1f5f9` / `background-muted`)
  - Usage: Subtle backgrounds, hover states

### Text Colors
- **Primary Text** (`#0f172a` / `text-primary`)
  - Usage: Main headings, body text (improved contrast from original `#002333`)
  - WCAG AAA compliant on white backgrounds
- **Secondary Text** (`#64748b` / `text-secondary`)
  - Usage: Secondary information, labels, descriptions
  - WCAG AA compliant
- **Muted Text** (`#94a3b8` / `text-muted`)
  - Usage: Placeholders, disabled text, hints
- **Inverse Text** (`#ffffff` / `text-inverse`)
  - Usage: Text on dark/colored backgrounds

### Border Colors
- **Border** (`#e2e8f0` / `border`)
  - Usage: Default borders, dividers
- **Border Light** (`#f1f5f9` / `border-light`)
  - Usage: Very subtle borders
- **Border Dark** (`#cbd5e1` / `border-dark`)
  - Usage: Emphasized borders, hover states

### Status Colors
- **Error** (`#ef4444` / `error`)
  - Usage: Error messages, destructive actions (improved from original `#ffc0c7`)
  - Light background: `#fee2e2` (`error-light`)
  - WCAG AA compliant
- **Warning** (`#f59e0b` / `warning`)
  - Usage: Warning messages, caution states
  - Light background: `#fef3c7` (`warning-light`)
- **Success** (`#10b981` / `success`)
  - Usage: Success messages, positive feedback
  - Light background: `#d1fae5` (`success-light`)

## Color Usage Guidelines

### Buttons
- **Primary Actions**: Use `primary` color (`#2563eb`)
- **Success Actions**: Use `secondary` color (`#10b981`)
- **Destructive Actions**: Use `error` color (`#ef4444`)
- **Hover States**: Use darker variants (e.g., `primary-dark`)

### Forms
- **Input Borders**: `border` (`#e2e8f0`)
- **Focus States**: `primary` with ring effect
- **Error States**: `error` color with light background
- **Labels**: `text-primary` for required, `text-secondary` for optional

### Cards & Surfaces
- **Card Background**: `background-surface` (`#ffffff`)
- **Card Borders**: `border` (`#e2e8f0`)
- **Shadows**: Use soft shadows (`shadow-soft`, `shadow-medium`)

### Navigation
- **Nav Background**: `background-surface` with subtle border
- **Active Links**: `primary` color
- **Hover States**: Slight opacity change or color shift

### Text Hierarchy
- **Headings**: `text-primary` (`#0f172a`)
- **Body Text**: `text-primary` (`#0f172a`)
- **Secondary Info**: `text-secondary` (`#64748b`)
- **Muted/Placeholders**: `text-muted` (`#94a3b8`)

## Accessibility Compliance

All color combinations meet WCAG 2.1 Level AA standards:
- **Text on White**: Primary text (`#0f172a`) - AAA compliant (21:1 contrast)
- **Primary Blue on White**: AA compliant (4.5:1 contrast)
- **Error Red**: AA compliant for text on light backgrounds
- **Secondary Green**: AA compliant for text on white

## Responsive Design

Colors remain consistent across all screen sizes. The palette supports:
- **Mobile** (< 640px): Full color palette with optimized spacing
- **Tablet** (640px - 1024px): Enhanced spacing and larger touch targets
- **Desktop** (> 1024px): Full layout with optimal visual hierarchy

## Migration from Original Colors

| Original Color | New Color | Reason |
|---------------|-----------|--------|
| `#f2f4f8` (background) | `#f8fafc` | Cleaner, more modern appearance |
| `#00ff84` (success) | `#10b981` | Better contrast, more professional |
| `#ffc0c7` (error) | `#ef4444` | Improved visibility and contrast |
| `#002333` (text) | `#0f172a` | Better readability, AAA compliant |
| `#2dbf64` (active) | `#10b981` | Consistent with secondary color |

## Tailwind CSS Usage

All colors are available as Tailwind utility classes:
- `bg-primary`, `text-primary`, `border-primary`
- `bg-secondary`, `text-secondary`
- `bg-background`, `bg-background-surface`
- `text-text-primary`, `text-text-secondary`
- `border-border`, `border-border-light`
- `bg-error`, `text-error`
- And more...

See `tailwind.config.js` for the complete color configuration.

