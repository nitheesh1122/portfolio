import { motion } from 'framer-motion';

interface SectionHeaderProps {
    index: string;
    title: string;
    subtitle?: string;
}

const SectionHeader = ({ index, title, subtitle }: SectionHeaderProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
        >
            <div className="border-t border-brand" />
            <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="font-mono text-sm tracking-[0.3em] text-brand-accent">{index}</span>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-brand">{title}</h2>
                {subtitle && <p className="text-muted text-sm md:text-base ml-auto">{subtitle}</p>}
            </div>
        </motion.div>
    );
};

export default SectionHeader;
