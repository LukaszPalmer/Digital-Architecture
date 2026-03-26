export interface PricingPackage {
    id: string;
    name: string;
    label: string;
    description: string;
    features: string[];
    investment: string;
    highlighted?: boolean;
}
