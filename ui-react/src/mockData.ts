src/mockdata.ts
export type ProductRow = {
  location: string;
  product: string;
  serviceId?: string;
  type?: string;
  status: "Active" | "Suspended" | "Pending" | "Disconnected";
  changed: string;
  qty: number;
  price: string;
};

export type CaseRow = {
  id: string;
  account: string;
  summary: string;
  detail: string;
};

export const mock = {
  accountName: "1209 test",
  status: "Active" as const,

  customerProfile: {
    address: "123 BLACKSMITHS DR, GEORGETOWN, TX 78626",
    accountCode: "100095",
    accountType: "BUSINESS",
    phone: "N/A",
    creditRating: "500",
    cassCertification: "Uncertified",
    email: "oscar.kanungo@chrsolutions.com",
  },

  billingSummary: {
    dueDate: "Account is Current",
    balanceForward: "$290.62",
    newCharges: "$45.00",
    availableCredits: "$0.00",
    paymentsPending: "$25.00",
    currentBalance: "$335.62",
  },

  alerts: [{ title: "OPEN CASE", subtitle: "Open Case (CAS-01270-D3X8J3)" }],

  products: [
    {
      location: "1005 VOGEL DR APT 1 GEORGETOWN TX 78626",
      product: "Hosted PBX Service",
      type: "B",
      status: "Active",
      changed: "10/9/2025",
      qty: 1,
      price: "$8,595.00",
    },
    {
      location: "1005 VOGEL DR APT 1 GEORGETOWN TX 78626",
      product: "Standalone Internet SmartRG",
      type: "B",
      status: "Active",
      changed: "8/26/2025",
      qty: 1,
      price: "$26.50",
    },
    {
      location: "1005 VOGEL DR APT 1 GEORGETOWN TX 78626",
      product: "Standalone Internet SmartRG",
      type: "B",
      status: "Active",
      changed: "8/26/2025",
      qty: 1,
      price: "$26.50",
    },
    {
      location: "1005 VOGEL DR APT 1 GEORGETOWN TX 78626",
      product: "Standalone Internet SmartRG",
      type: "B",
      status: "Active",
      changed: "8/26/2025",
      qty: 5,
      price: "$132.50",
    },
  ] as ProductRow[],

  openCases: [
    {
      id: "CAS-01270",
      account: "1209 test",
      summary: "High - Internet · Slow internet",
      detail: "Case created from CSR workspace alert.",
    },
  ] as CaseRow[],
};
