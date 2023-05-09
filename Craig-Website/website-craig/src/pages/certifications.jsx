import Head from 'next/head'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import certCompTIA from '@/images/certifications/comptiaA+.png'
import certAWSCCCP from '@/images/certifications/awscccp.png'
import certMSAZ900 from '@/images/certifications/msaz900.png'
import certSafe1 from '@/images/certifications/safepo.png'
import certSecurityPlus from '@/images/certifications/security-plus.svg'

const certifications = [
    {
        name: 'CompTIA A+',
        description:
            'An entry-level certification for IT professionals covering mobile devices, networking, hardware, virtualization, and cloud computing.',
        link: { href: 'https://www.credly.com/badges/99aff24a-8889-43c9-a24e-78facf2c1d4b/public_url', label: 'CompTIA - Credly' },
        logo: certCompTIA,
    },
    {
        name: 'AWS Cloud Quest: Cloud Practitioner',
        description:
            'A certification for cloud engineers, covering cloud fundamentals, IP services, security, and automation.',
        link: { href: 'https://www.credly.com/badges/7ca9fe5c-04c0-48ab-a941-9902485497dc/public_url', label: 'AWS - Credly' },
        logo: certAWSCCCP,
    },
    {
        name: 'Microsoft Certified: Azure Fundamentals',
        description:
            'A certification demonstrating foundational level knowledge of cloud services and how those services are provided with Microsoft Azure',
        link: { href: 'https://www.credly.com/badges/66dbd724-82d5-4ac1-9f90-47aa934fcbc1/public_url', label: 'Microsoft - Credly' },
        logo: certMSAZ900,
    },
    {
        name: 'SAFe® 5 Product Owner/Product Manager',
        description:
            'SAFe professional who works with customers and development organizations to identify and write requirements. Key areas of competency include identifying customer needs, writing epics, capabilities, and features.',
        link: { href: 'https://www.credly.com/badges/f357bd90-3503-4413-a6dd-64483d2a8ff9/public_url', label: 'SAFe - Credly' },
        logo: certSafe1,
    },
    {
        name: 'Associate of (ISC)²',
        description:
            'A certification for IT security professionals, covering threats, attacks, risk management, and cryptography.',
        link: { href: 'https://www.comptia.org/certifications/security', label: 'comptia.org' },
        logo: certSecurityPlus,
    },
    {
        name: 'Developing Cloud Native Applications',
        description:
            'A certification for IT security professionals, covering threats, attacks, risk management, and cryptography.',
        link: { href: 'https://www.comptia.org/certifications/security', label: 'comptia.org' },
        logo: certSecurityPlus,
    },
    {
        name: 'SAFe 5 DevOps Practitioner',
        description:
            'A certification for IT security professionals, covering threats, attacks, risk management, and cryptography.',
        link: { href: 'https://www.comptia.org/certifications/security', label: 'comptia.org' },
        logo: certSecurityPlus,
    },
    {
        name: 'SAFe 5 Practitioner',
        description:
            'A certification for IT security professionals, covering threats, attacks, risk management, and cryptography.',
        link: { href: 'https://www.comptia.org/certifications/security', label: 'comptia.org' },
        logo: certSecurityPlus,
    },
    {
        name: 'Introduction to Cloud Computing',
        description:
            'A certification for IT security professionals, covering threats, attacks, risk management, and cryptography.',
        link: { href: 'https://www.comptia.org/certifications/security', label: 'comptia.org' },
        logo: certSecurityPlus,
    },
    {
        name: 'SAFe 5 Scrum Master',
        description:
            'A certification for IT security professionals, covering threats, attacks, risk management, and cryptography.',
        link: { href: 'https://www.comptia.org/certifications/security', label: 'comptia.org' },
        logo: certSecurityPlus,
    },    {
        name: 'CompTIA Project+ Certification',
        description:
            'A certification for IT security professionals, covering threats, attacks, risk management, and cryptography.',
        link: { href: 'https://www.comptia.org/certifications/security', label: 'comptia.org' },
        logo: certSecurityPlus,
    },
]

function LinkIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default function Certifications() {
    return (
        <>
            <Head>
                <title>Certifications - Craig Willey</title>
                <meta
                    name="description"
                    content="My IT certifications and qualifications."
                />
            </Head>
            <SimpleLayout
                title="My IT certifications and qualifications."
                intro="These are the IT certifications I've earned throughout my career. They represent my commitment to continuous learning and staying up-to-date with the latest technologies."
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {certifications.map((certification) => (
                        <Card as="li" key={certification.name}>
                            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <Image
                                    src={certification.logo}
                                    alt=""
                                    className="h-12 w-12"
                                    unoptimized
                                />
                            </div>
                            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                <Card.Link href={certification.link.href}>{certification.name}</Card.Link>
                            </h2>
                            <Card.Description>{certification.description}</Card.Description>
                            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                                <LinkIcon className="h-6 w-6 flex-none" />
                                <span className="ml-2">{certification.link.label}</span>
                            </p>
                        </Card>
                    ))}
                </ul>
            </SimpleLayout>
        </>
    );
}