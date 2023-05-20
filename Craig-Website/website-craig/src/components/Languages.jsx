import Image from 'next/image'

import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/airbnb.svg'
import logoMirage from '@/images/logos/animaginary.svg'
import logoStatamic from '@/images/logos/cosmos.svg'
import logoStaticKit from '@/images/logos/facebook.svg'
import logoTransistor from '@/images/logos/helio-stream.svg'
import logoTuple from '@/images/logos/open-shuttle.svg'

const sponsors = [
    { name: 'Transistor', logo: logoTransistor },
    { name: 'Tuple', logo: logoTuple },
    { name: 'StaticKit', logo: logoStaticKit },
    { name: 'Mirage', logo: logoMirage },
    { name: 'Laravel', logo: logoLaravel },
    { name: 'Statamic', logo: logoStatamic },
]

export function Sponsors() {
    return (
        <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
            <Container>
                <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                    Current sponsorships for our workshops and speakers.
                </h2>
                <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.name}
                            className="flex items-center justify-center"
                        >
                            <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
