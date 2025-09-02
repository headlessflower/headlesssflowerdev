
<template>
  <section class="bg-white text-gray-900">
    <!-- Hero Section -->
    <div class="relative bg-gray-50 py-20 px-6 lg:px-12 text-center">
      <h1 class="text-4xl lg:text-5xl font-bold mb-4">
        Bespoke Archival Databases
      </h1>
      <p class="max-w-3xl mx-auto text-lg text-gray-600">
        Headless Flower builds custom archival databases for museums, 
        organizations, and private collections. We design systems that balance 
        proven archival standards with scalable modern technology.
      </p>
    </div>

    <!-- Section 1: Core Choice -->
    <div class="max-w-5xl mx-auto py-16 px-6 lg:px-8">
      <h2 class="text-2xl font-semibold mb-4">1. Relational Database as the Core</h2>
      <p class="mb-4">
        Relational Database Management Systems (RDBMS) have a proven record in cultural heritage 
        institutions. They ensure <strong>data integrity</strong>, prevent orphan records, 
        and support complex structured queries. 
      </p>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>PostgreSQL</strong> — recommended for its robustness, JSONB support, 
        concurrency, and extensibility (GIS, full-text, etc.).</li>
        <li><strong>MySQL / MariaDB</strong> — viable if your team is familiar with it; 
        widely used in systems like ArchivesSpace.</li>
        <li><strong>SQLite</strong> — best suited for prototyping or single-user desktop tools, 
        not production with multiple users.</li>
      </ul>
    </div>

    <!-- Section 2: Data Model -->
    <div class="bg-gray-50 py-16 px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-semibold mb-4">2. Data Model & Hierarchy</h2>
        <p class="mb-4">
          Archival systems must reflect hierarchy and metadata richness. We design 
          schemas with parent–child relationships, ensuring context is preserved.
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>Tables for collection- and item-level records with foreign keys.</li>
          <li>Recursive SQL or ORMs to reconstruct full hierarchies.</li>
          <li>JSONB fields (Postgres) for flexible technical metadata (e.g. video codec info).</li>
          <li>Standards-aligned fields for DACS, ISAD(G), and controlled vocabularies.</li>
        </ul>
      </div>
    </div>

    <!-- Section 3: Hybrid Extensions -->
    <div class="max-w-5xl mx-auto py-16 px-6 lg:px-8">
      <h2 class="text-2xl font-semibold mb-4">3. Hybrid & NoSQL Integration</h2>
      <p class="mb-4">
        Relational databases form the foundation, but some archival use cases 
        benefit from NoSQL tools. We integrate these seamlessly when needed:
      </p>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Elasticsearch / Solr</strong> for full-text search across OCR or transcripts.</li>
        <li><strong>Graph databases</strong> for linked data or complex relationships.</li>
        <li>Export to <strong>RDF</strong> or Linked Data models for interoperability.</li>
      </ul>
    </div>

    <!-- Section 4: Scalability -->
    <div class="bg-gray-50 py-16 px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-semibold mb-4">4. Scalability & Future-Proofing</h2>
        <p class="mb-4">
          We design for the long term. A single Postgres instance can handle millions 
          of records, but our systems anticipate public access and scaling.
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>Read/write separation for performance.</li>
          <li>Cloud-ready with managed Postgres/MySQL options.</li>
          <li>Built-in extensibility: GIS (PostGIS), text search, advanced indexing.</li>
        </ul>
      </div>
    </div>

    <!-- Section 5: Media Handling -->
    <div class="max-w-5xl mx-auto py-16 px-6 lg:px-8">
      <h2 class="text-2xl font-semibold mb-4">5. Media Handling</h2>
      <p class="mb-4">
        Archival databases must handle large digital assets. We follow best practice:
      </p>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>Store files on file servers or cloud storage.</li>
        <li>Track metadata (paths, checksums, formats) in the DB.</li>
        <li>Integrate with Digital Asset Management workflows.</li>
      </ul>
    </div>

    <!-- Section 6: Standards -->
    <div class="bg-gray-50 py-16 px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-semibold mb-4">6. Standards & Interoperability</h2>
        <p class="mb-4">
          We align schemas with archival standards and vocabularies, ensuring your 
          data is portable and interoperable.
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>DACS, ISAD(G), and EAD-compatible structures.</li>
          <li>Controlled vocabularies (AAT, VIAF, Getty ULAN).</li>
          <li>Identifiers designed for linked data.</li>
        </ul>
      </div>
    </div>

    <!-- Conclusion -->
    <div class="max-w-4xl mx-auto py-20 text-center px-6">
      <h2 class="text-3xl font-bold mb-6">Our Approach</h2>
      <p class="text-lg text-gray-700 mb-8">
        Start with a solid relational core (PostgreSQL recommended), 
        extend as needed with NoSQL components, and future-proof your archive with 
        scalable, standards-compliant design. 
      </p>
      <NuxtLink
        to="/contact"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow"
      >
        Start a Database Consultation
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "Bespoke Archival Databases | Headless Flower",
  meta: [
    {
      name: "description",
      content:
        "Headless Flower builds bespoke archival databases for museums, organizations, and private users. PostgreSQL recommended as core, scalable with NoSQL components.",
    },
  ],
});
</script>
