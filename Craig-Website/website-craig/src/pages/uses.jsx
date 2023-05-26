import Head from 'next/head'
import Image from 'next/image'
import { Accordion } from '@/components/Accordion'
import { Modal } from '@/components/Modal'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Languages } from '@/components/Languages'
import { ThreeColumn } from '@/components/ThreeColumn'
import { Metrics } from '@/components/Metrics'

function ToolsSection({ children, ...props }) {
    return (
        <Section {...props}>
            <Accordion title={props.title}>
                <ul role="list" className="space-y-16">
                    {children}
                </ul>
            </Accordion>
        </Section>
    )
}

function Tool({ title, href, children }) {
    return (
        <Modal title={title}>
            {children}
            <a href={href}>More Details</a>
        </Modal>
    )
}

function ImageTool({ title, href, src, alt, children }) {
    return (
        <Modal title={title}>
            <div className="relative h-24 w-48">
                <Image
                    src={src}
                    alt={alt}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            {children}
            <a href={href}>More Details</a>
        </Modal>
    )
}

export default function Uses() {
    return (
        <>
            <Head>
                <title>Craig Willey - My Portfolio</title>
                <meta
                    name="description"
                    content="Here you can find more about me, my skills, hobbies, portfolio, technologies I use, my favorite tools, and my education."
                />
            </Head>
            <SimpleLayout
                title="It's a beautiful day in the neighborhood."
                intro="Here, you can find more about me, my skills, hobbies, portfolio, technologies I use, my favorite tools, and my education."
            >
                <div className="space-y-20">
                    <Languages />
                    <ThreeColumn />
                    <Metrics />
                </div>
            </SimpleLayout>
        </>
    )
}