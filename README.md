flowchart LR
  %% CHANNELS
  subgraph C["Channels / Operator Experience"]
    C1["Web SPA<br/>(React / Next.js)"]
    C2["Mobile<br/>(React Native)"]
    C3["Operator Console<br/>(Role-based Tasks)"]
    C4["Embedded BI"]
  end

  %% EDGE
  subgraph E["Edge / Security"]
    E1["CDN / WAF"]
    E2["API Gateway"]
    E3["OAuth2 / OIDC<br/>SSO + RBAC"]
    E4["Policy + Rate Limits"]
  end

  %% WRAPPER
  subgraph W["Modern Wrapper Layer"]
    subgraph API["API + Domain Services"]
      BFF["BFF"]
      D1["Customer / Orders / Inventory"]
      D2["Billing / Tickets / Events"]
      D3["Versioned APIs + Events"]
    end

    subgraph K["Knowledge & Process"]
      K1["Workflows (BPMN)"]
      K2["Rules (DMN)"]
      K3["Playbooks / SOPs"]
    end

    subgraph AI["AI Assist (Optional)"]
      A1["AI Gateway"]
      A2["RAG (Approved Knowledge)"]
      A3["Guardrails + Eval"]
    end
  end

  %% INTEGRATION
  subgraph F["Integration Fabric"]
    F1["iPaaS / ESB"]
    F2["Streaming (Kafka)"]
    F3["Batch / ETL"]
  end

  %% LEGACY
  subgraph L["Legacy OSS/BSS (System of Record)"]
    L1["Existing Apps"]
    L2["Existing Databases"]
    L3["Adapters / Anti-Corruption Layer"]
  end

  %% DATA
  subgraph D["Data + Audit Platform"]
    D1["Postgres (Wrapper State)"]
    D2["Search (OpenSearch)"]
    D3["Warehouse / Lake"]
    D4["Append-only Audit Log (WORM)"]
  end

  %% OPS
  subgraph O["Platform / Ops"]
    O1["Kubernetes + Docker"]
    O2["CI/CD + IaC"]
    O3["Observability + Tracing"]
  end

  %% FLOWS
  C --> E --> BFF
  BFF --> D1
  BFF --> D2
  D1 --> D3
  D2 --> D3

  D3 --> K
  D3 --> AI

  D3 --> F --> L3 --> L1
  L3 --> L2

  D3 --> D
  D --> O
