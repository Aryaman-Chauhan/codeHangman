import clsx from "clsx";

interface LanguageChipProps {
    name: string;
    bgColor: string;
    color: string;
    lost: boolean;
}

export default function LanguageChip({name, bgColor, color, lost}: LanguageChipProps) {
    const styles = {
        backgroundColor: bgColor,
        color: color,
    };

    const classes = clsx("chip", {"lost":lost});

    return (
        <span className={classes} style={styles}>{name}</span>
    );
}