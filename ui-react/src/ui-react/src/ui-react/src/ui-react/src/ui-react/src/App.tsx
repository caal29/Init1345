import "./styles.css";
import { mock } from "./mockData";
import { useMemo, useState } from "react";

function StatusPill({ status }: { status: string }) {
  return (
    <span className="pill">
      <span className="sdot" />
      {status}
    </span>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return mock.products;
    return mock.products.filter((p) =>
      [p.location, p.product, p.status, p.price, p.changed].join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <div className="brand-badge" />
            <div>
              omnia360{" "}
              <span style={{ color: "rgba(232,238,252,.55)", fontWeight: 500 }}>/</span>{" "}
              <span style={{ color: "rgba(232,238,252,.78)", fontWeight: 600 }}>
                CSR Workspace
              </span>
            </div>
          </div>

          <div className="searchbar">
            <input className="input" defaultValue={mock.accountName} aria-label="account search" />
            <select className="select" aria-label="search by">
              <option>by Account Details</option>
              <option>by Service ID</option>
              <option>by Address</option>
            </select>
            <button className="button">Scan</button>
          </div>

          <div className="nav">
            <span className="pill">Workplace</span>
            <span className="pill">CSR Workspace</span>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="header-row">
          <div>
            <h1 className="h1">Account Summary: {mock.accountName}</h1>
            <div className="sub">{mock.customerProfile.address}</div>
          </div>

          <div className="actions">
            <div className="status">
              <span>Status:</span>
              <span className="dot" />
              <strong style={{ color: "rgba(232,238,252,.92)" }}>{mock.status}</strong>
            </div>
            <button className="button">Things I Can Do</button>
          </div>
        </div>

        <section className="grid top">
          <div className="card">
            <h3>Customer Profile</h3>
            <div className="kv">
              <div className="k">Account Code</div>
              <div className="v">{mock.customerProfile.accountCode}</div>

              <div className="k">Account Type</div>
              <div className="v">{mock.customerProfile.accountType}</div>

              <div className="k">Phone</div>
              <div className="v">{mock.customerProfile.phone}</div>

              <div className="k">Credit Rating</div>
              <div className="v">{mock.customerProfile.creditRating}</div>

              <div className="k">CASS Certification</div>
              <div className="v">{mock.customerProfile.cassCertification}</div>

              <div className="k">Email</div>
              <div className="v link">{mock.customerProfile.email}</div>
            </div>

            <div className="divider" />

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span className="pill">Manage Authorized Users</span>
              <span className="pill">Manage Account Contacts</span>
            </div>
          </div>

          <div className="card">
            <h3>Billing Summary</h3>
            <div className="bill-row">
              <span>Due Date</span>
              <span>{mock.billingSummary.dueDate}</span>
            </div>
            <div className="bill-row">
              <span>Balance Forward</span>
              <span>{mock.billingSummary.balanceForward}</span>
            </div>
            <div className="bill-row">
              <span>New Charges</span>
              <span>{mock.billingSummary.newCharges}</span>
            </div>
            <div className="bill-row">
              <span>Available Credits</span>
              <span>{mock.billingSummary.availableCredits}</span>
            </div>
            <div className="bill-row">
              <span>Payments Pending</span>
              <span>{mock.billingSummary.paymentsPending}</span>
            </div>
            <div className="bill-row total">
              <span>Current Balance</span>
              <span>{mock.billingSummary.currentBalance}</span>
            </div>

            <button className="button primary" style={{ width: "100%", marginTop: 12 }}>
              Take Payment
            </button>
          </div>

          <div className="card">
            <h3>Alerts ({mock.alerts.length})</h3>
            {mock.alerts.map((a) => (
              <div key={a.subtitle} className="alert">
                <div className="badge" />
                <div>
                  <div className="t">{a.title}</div>
                  <div className="s">{a.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid bottom" style={{ marginTop: 14 }}>
          <div className="card">
            <div className="table-tools">
              <h3 style={{ margin: 0 }}>Products & Services</h3>
              <input
                className="input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter products and services"
              />
            </div>

            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Location & Product</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Changed</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p, idx) => (
                    <tr key={idx}>
                      <td>
                        <div style={{ color: "rgba(232,238,252,.72)", fontSize: 12 }}>
                          {p.location}
                        </div>
                        <div style={{ marginTop: 6, fontWeight: 650 }}>{p.product}</div>
                      </td>
                      <td>{p.type ?? "-"}</td>
                      <td>
                        <StatusPill status={p.status} />
                      </td>
                      <td>{p.changed}</td>
                      <td>{p.qty}</td>
                      <td>{p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <h3>Open Cases ({mock.openCases.length})</h3>
            {mock.openCases.map((c) => (
              <div key={c.id} className="case">
                <div className="id">{c.id}</div>
                <div className="name">{c.account}</div>
                <div className="desc">{c.summary}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
