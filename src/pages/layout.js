import React from "react";
import LayoutSidebar from "../components/LayoutSidebal";

export default function LayoutPage() {
  return (
    <LayoutSidebar>
      <div className="prose">
        <h1>1. Introduction</h1>
        <h2>Purpose of the Document</h2>
        <p>
          This guideline is designed to assist Confederation College staff in
          managing content on the college's website using the Drupal Content
          Management System (CMS). Whether you're updating existing pages,
          creating new content, or managing files, this guide provides
          step-by-step instructions to ensure consistency and quality across the
          site.
        </p>
        <h2>Target Audience</h2>
        <p>
          This document is intended for faculty, administrators, and other staff
          members responsible for maintaining and updating the college's
          website. No prior experience with Drupal CMS is required, as this
          guide covers the basics and provides resources for further learning.
        </p>
        <h2>Overview of Drupal CMS</h2>
        <p>
          Drupal is a powerful and flexible CMS used to create and manage the
          Confederation College website. This guide will cover the most common
          tasks you'll encounter, including:
        </p>

        <ul>
          <li>Editing content related to department pages</li>
          <li>Creating new pages for departments</li>
          <li>Uploading or replacing PDFs, Docs, and other files</li>
          <li>Adding images and links</li>
          <li>
            Utilizing specific blocks like gallery blocks, webforms, and FAQ
            blocks
          </li>
        </ul>

        <h2>College-Specific Guidelines</h2>
        <p>
          In addition to general best practices, this guide includes specific
          guidelines and standards that align with Confederation College's
          branding, accessibility requirements, and content strategy. Please
          adhere to these guidelines to maintain a cohesive and professional
          appearance across the site.
        </p>
        <h2>Additional Support</h2>
        <p>
          Should you encounter any difficulties or have questions not covered in
          this guide, please refer to the “Contact and Support” section for
          assistance from the college's web development team.
        </p>
      </div>
    </LayoutSidebar>
  );
}
