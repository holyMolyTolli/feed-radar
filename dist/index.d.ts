import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ClassProp } from 'class-variance-authority/types';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as React_2 from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Avatar: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & React_2.RefAttributes<HTMLSpanElement>>;

export declare const AvatarFallback: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & React_2.RefAttributes<HTMLSpanElement>>;

export declare const AvatarImage: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React_2.RefAttributes<HTMLImageElement>, "ref"> & React_2.RefAttributes<HTMLImageElement>>;

export declare function Badge({ className, variant, ...props }: BadgeProps): JSX_2.Element;

declare interface BadgeProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}

export declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Button: React_2.ForwardRefExoticComponent<ButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

declare interface ButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Card: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CardContent: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CardDescription: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const CardFooter: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CardHeader: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CardTitle: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLHeadingElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const Input: React_2.ForwardRefExoticComponent<InputProps & React_2.RefAttributes<HTMLInputElement>>;

declare interface InputProps extends React_2.InputHTMLAttributes<HTMLInputElement> {
}

export declare const Label: React_2.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React_2.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: ClassProp | undefined) => string> & React_2.RefAttributes<HTMLLabelElement>>;

export declare interface Radar {
    id: string;
    linkedinCookie: string;
    description: string;
    exclusionCriteria: string;
    inclusionCriteria: string;
    notificationEmail: string;
    context?: string;
    runs?: RadarRun[];
}

export declare function RadarEdit({ radar, onSubmit, onBack }: RadarEditProps): JSX_2.Element;

declare interface RadarEditProps {
    radar: Radar;
    onSubmit: (data: RadarFormData) => void;
    onBack: () => void;
}

export declare function RadarForm({ data, onSubmit, onBack }: RadarFormProps): JSX_2.Element;

export declare type RadarFormData = Omit<Radar, 'id' | 'runs'>;

declare interface RadarFormProps {
    data: Partial<RadarFormData>;
    onSubmit: (data: RadarFormData) => void;
    onBack: () => void;
}

export declare function RadarList({ radars, onSelect, onCreate }: RadarListProps): JSX_2.Element;

declare interface RadarListProps {
    radars: Radar[];
    onSelect: (id: string) => void;
    onCreate: () => void;
}

export declare function RadarNotFound({ onBackClick }: RadarNotFoundProps): JSX_2.Element;

declare interface RadarNotFoundProps {
    onBackClick: () => void;
}

export declare interface RadarResult {
    id: string;
    postUrl: string;
    content: string;
    matchScore: number;
    matchReason: string;
    profile: {
        id: string;
        name: string;
        avatarUrl: string;
    };
}

export declare function RadarResults({ runs }: RadarResultsProps): JSX_2.Element;

declare interface RadarResultsProps {
    runs: RadarRun[];
}

export declare interface RadarRun {
    id: string;
    timestamp: string;
    results: RadarResult[];
}

export declare function RecentPostsTable({ radars }: RecentPostsTableProps): JSX_2.Element;

declare interface RecentPostsTableProps {
    radars: Radar[];
}

export declare const Table: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableElement> & React_2.RefAttributes<HTMLTableElement>>;

export declare const TableBody: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableSectionElement> & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare const TableCaption: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableCaptionElement> & React_2.RefAttributes<HTMLTableCaptionElement>>;

export declare const TableCell: React_2.ForwardRefExoticComponent<React_2.TdHTMLAttributes<HTMLTableCellElement> & React_2.RefAttributes<HTMLTableCellElement>>;

export declare const TableFooter: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableSectionElement> & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare const TableHead: React_2.ForwardRefExoticComponent<React_2.ThHTMLAttributes<HTMLTableCellElement> & React_2.RefAttributes<HTMLTableCellElement>>;

export declare const TableHeader: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableSectionElement> & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare const TableRow: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableRowElement> & React_2.RefAttributes<HTMLTableRowElement>>;

export declare const Textarea: React_2.ForwardRefExoticComponent<TextareaProps & React_2.RefAttributes<HTMLTextAreaElement>>;

declare interface TextareaProps extends React_2.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

export declare function useRadars(): {
    radars: Radar[];
    createRadar: (radarData: RadarFormData) => void;
    updateRadar: (id: string, radarData: RadarFormData) => void;
    deleteRadar: (id: string) => void;
};

export { }
