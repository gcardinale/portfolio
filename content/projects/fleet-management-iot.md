---
title: Piattaforma Fleet Management & IoT — settore automotive
order: 1
role: Software & Platform Engineer (end-to-end)
period: in corso (dal 2025)
sector: Azienda operante nel settore automotive / telematica veicolare
status: in corso
summary: Piattaforma di gestione flotte con dispositivi di sicurezza alla guida e telemetria IoT — backend .NET, infrastruttura Azure, integrazione con hardware telematico reale, app mobile.
stack:
  - .NET (Clean Architecture, .NET Aspire)
  - ASP.NET Core MVC + Razor
  - Entity Framework Core
  - SQL Server
  - Azure (IoT Hub, Container Apps, Face API, Blob Storage)
  - EMQX / MQTT
  - Infrastructure as Code (Bicep)
  - app mobile Flutter + Mobile API (JWT, refresh-token rotation, unlock ECDSA challenge, geofencing)
featured: true
---

## Contesto

Piattaforma per la gestione di flotte di veicoli dotati di dispositivi di sicurezza alla guida (compreso il blocco all'avviamento) e di telemetria IoT, sviluppata in partnership tecnica con il produttore dell'hardware. Lavoro al prodotto come unico sviluppatore lato software, attraverso più iterazioni successive della piattaforma; la versione attuale è quella in produzione ed evoluzione.

## Sfida

Far parlare un backend cloud con hardware telematico reale, in modo affidabile e in tempo reale, su flotte distribuite: provisioning dei dispositivi, comandi remoti, eventi dei dispositivi di sicurezza, posizione GPS, allarmi manomissione e movimento. In più: riconoscimento del conducente, dashboard di sicurezza, gestione del magazzino/assemblaggio dei kit, e un'app mobile per lo sblocco a distanza e di prossimità — il tutto con un solo sviluppatore e cicli di rilascio rapidi.

## Cosa ho costruito

- **Backend Fleet Management** in .NET con Clean Architecture e .NET Aspire: gestione veicoli, conducenti, basi operative, viaggi (trip detection), assegnazioni, timeline degli eventi dei dispositivi.
- **Integrazione IoT**: device registration e provisioning via Azure IoT Hub, interpretazione dei segnali dall'hardware telematico reale, comandi remoti in parallelo su MQTT (EMQX) **e** SMS, polling di stato, allarmi manomissione e movimento.
- **Riconoscimento del conducente / sicurezza alla guida**: enrollment del volto (Azure Face API + Blob), cattura frame da camera su single-board computer, verifica del volto con logica di resilienza, detection di sonnolenza/distrazione e dashboard di sicurezza del conducente.
- **Modulo magazzino**: tracciabilità dei kit con QR per ordine di assemblaggio, gestione di istanze seriali, distinta base con alternative, wizard di ricezione con cost split, ordini di assemblaggio con consumo/produzione di unità seriali.
- **App mobile (Flutter)** + Mobile API .NET: autenticazione JWT con rotazione del refresh token, sblocco remoto con challenge ECDSA, sblocco di prossimità con geofencing (haversine) e notifiche in background, mappa con ultima posizione nota. Pubblicata su uno store mobile.
- **Infrastruttura come codice** in Bicep (Azure VNet, Container Apps, workload profiles, broker MQTT), CI/CD, ambienti separati dev/release/Azure.

## Stack

.NET / C# (Clean Architecture, .NET Aspire), ASP.NET Core MVC + Razor, EF Core, SQL Server; Azure IoT Hub, Container Apps, Face API, Blob Storage; EMQX/MQTT; IaC Bicep; app mobile Flutter + Mobile API; GitHub. Pratica Agile e suite di unit test estesa.

## Risultati

- Piattaforma in produzione su flotte reali; app mobile pubblicata su store.
- Ordine di grandezza del codice (sola versione attuale): ~1.185 file C# e ~280 file di test, ~250 commit in tre mesi — sviluppo da un singolo sviluppatore.
- Valutazione interna dell'asset software: nell'ordine di alcune centinaia di migliaia di euro (costo di sviluppo equivalente per un team), con potenziale di prodotto SaaS sensibilmente superiore.
- Quattro iterazioni complete della piattaforma sviluppate nell'arco di circa nove mesi, con pivot tecnici rapidi guidati dall'evoluzione dell'hardware e dei requisiti.
