---
title: Piattaforma SaaS di telemedicina — settore sanitario
order: 4
role: Software & Infrastructure Architect (freelance)
period: 2023–2025
sector: Azienda operante nel settore sanitario (telemedicina)
status: concluso
summary: Piattaforma SaaS per telemedicina per medici di medicina generale. Cluster Kubernetes self-hosted su 4 nodi, SLA 99,99% sostenuto per 2,5 anni, infrastruttura a €55/mese, dimensionata per scalare a 200+ medici senza nuovi nodi.
stack:
  - backend .NET
  - MySQL
  - Kubernetes self-hosted (4 nodi)
  - app mobile Flutter / Xamarin
  - pannello web per personale sanitario
  - video-consulto
  - centralino AI su Asterisk
featured: true
---

## Contesto

Piattaforma SaaS per la telemedicina rivolta ai medici di medicina generale: app per il paziente, pannello per il personale sanitario, video-consulto, centralino di prenotazione. Ho progettato e gestito operativamente l'intera piattaforma — software e infrastruttura — come freelance.

## Sfida

Reggere una piattaforma sanitaria in produzione con disponibilità elevata e costi infrastrutturali sostenibili, su un team minimo. La scelta è stata un cluster Kubernetes **self-hosted** invece di un servizio gestito (AKS/EKS/GKE), dimensionato fin dall'inizio per scalare di oltre 10× senza modifiche infrastrutturali.

## Cosa ho costruito

- **Cluster Kubernetes self-hosted** su 4 nodi dedicati, progettato per scalare oltre 10× il carico iniziale senza aggiungere nodi; SLA 99,99% sostenuto per 2,5 anni di produzione continuativa.
- **Piattaforma completa**: backend .NET, database MySQL, app mobile (Flutter / Xamarin), pannello web per il personale sanitario, video-consulto.
- **Centralino AI** integrato con Asterisk per automatizzare le chiamate di prenotazione: code di segreteria con fallback su operatore umano, riduzione del carico sul personale.
- Gestione operativa: deploy, osservabilità, capacity planning, manutenzione.

## Stack

Backend .NET, MySQL, Kubernetes self-hosted (4 nodi), app mobile Flutter / Xamarin, pannello web, video-consulto, centralino AI su Asterisk.

## Risultati

- **SLA 99,99%** sostenuto per 2,5 anni; zero incidenti di service disruption nella vita operativa.
- **Costo infrastruttura: €55/mese fissi**; costo marginale per medico a saturazione nell'ordine di pochi euro l'anno — un ordine di grandezza sotto le alternative cloud-managed.
- Fino a ~19 medici di medicina generale attivi al picco; circa 38.000 pazienti serviti dal sistema.
- Un case study tecnico dedicato (architettura del cluster, scelte FinOps) è disponibile su richiesta.
