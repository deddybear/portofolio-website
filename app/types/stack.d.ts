interface DataTechnology {
    name: string;
    description: string;
    icon?: JSX.Element; 
}

interface Stack {
    name: string;
    technology: DataTechnology[]
}