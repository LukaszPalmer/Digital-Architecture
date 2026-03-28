export interface ServiceDetail {
    id: string;
    label: string;
    title: string;
    description: string;
    technicalSpecs: string[];
    tooltip: {
        term: string;
        explanation: string;
        benefit: string;
    };
}