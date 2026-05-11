---
title: Piattaforma legal-tech per un'associazione di tutela dei consumatori
order: 2
role: Software Architect (freelance, end-to-end)
period: in corso (dal 2019)
sector: Associazione nazionale di tutela dei consumatori
status: in corso
summary: Gestionale modulare per la gestione, digitalizzazione e consultazione di pratiche legali. .NET 10, Blazor, 12 database, firma digitale eIDAS, ML in produzione, GDPR by design.
stack:
  - .NET 10 / C# 13
  - ASP.NET Core
  - Blazor (Server + WASM)
  - React / TypeScript
  - Entity Framework Core (12 database MySQL)
  - Redis
  - Hangfire
  - Syncfusion
  - OData
  - firma digitale remota eIDAS
  - Machine Learning in produzione
  - GDPR by design
featured: true
---

## Contesto

Piattaforma gestionale proprietaria di un'associazione nazionale di tutela dei consumatori: gestisce l'intero ciclo delle pratiche legali — dalla raccolta documentale alla firma digitale, dalla contabilità alla posta certificata — su un volume di pratiche reali importante. La seguo come architetto e sviluppatore dal 2019, con manutenzione evolutiva continuativa.

## Sfida

Costruire e far evolvere un sistema ampio (decine di moduli, oltre dieci database) mantenendolo coerente, testabile e manutenibile da un singolo sviluppatore, in un dominio regolamentato (firma digitale CAD/eIDAS, conformità GDPR) e con un flusso costante di richieste dal cliente da gestire in modo Agile.

## Cosa ho costruito

- **Architettura modulare** (modular monolith): 19 moduli, ciascuno organizzato in 4 layer (`{Modulo}.Core` → `{Modulo}` → `{Modulo}.UI` → `{Modulo}.UI.Client`), repository generico, calcoli di business spinti su MySQL (stored function + trigger), gestione SQL manuale dello schema.
- **Firma digitale remota** integrata con provider certificati, conforme CAD/eIDAS, in produzione su pratiche legali reali.
- **Drive cifrato** su blob storage con gestione granulare dei permessi e tracciamento degli accessi — GDPR-compliant by design.
- **Modulo ML in produzione**: classificazione automatica delle email in tempo reale (~90% accuracy) con modelli "classici" (SVM / Random Forest) — scelta deliberata contro i transformer per garantire throughput e debuggability, con fallback human-in-the-loop sui casi ambigui riconosciuti dal modello stesso.
- **Modulo contabilità**: import di file di lavoro complessi del cliente, riconciliazioni, gestione "orfani" e tracciamento dei pagamenti, viste e report — con suite di test per riga sull'importer.
- **Modulo posta/PEC**: sincronizzazione e archiviazione automatica delle caselle, con gestione di quota, idempotenza e backup strutturato.
- **Privacy event-driven**: modello flag-on-row + drain ricorrente (sostituisce lo scheduling per-record), trigger anti-loop su più database, integrazione con il provider di email marketing.
- **Job ricorrenti** via Hangfire, caching Redis, UI con Syncfusion e una parte React/TypeScript.

## Stack

.NET 10 / C# 13, ASP.NET Core, Blazor Server + WASM, React 19/TypeScript, EF Core su 12 database MySQL (Pomelo), Redis, Hangfire, Syncfusion, OData, AutoMapper, FluentValidation, MailKit (OAuth2), Azure Blob/SFTP. Branch di sviluppo dedicato, suite di test ampia.

## Risultati

- 19 moduli, ~2.500 unit test, in manutenzione evolutiva continuativa da oltre cinque anni.
- Funzioni critiche (firma digitale, classificazione ML, contabilità, archiviazione PEC) stabilmente in produzione.
- Valutazione dell'asset: nell'ordine di alcune centinaia di migliaia fino al milione di euro come costo di sviluppo equivalente.
