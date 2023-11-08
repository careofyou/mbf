import { NextPage } from 'next';

import Hero from '@/src/components/hero/Hero';
import MetaData from '@/src/components/meta-data/MetaData';
import MotionSection from '@/src/components/motion/MotionSection';
import Timeline from '@/src/components/timeline/Timeline';

const IndexPage: NextPage = () => (
  <>
    <MetaData title="МБС" />
    <MotionSection>
      <Hero videoSrc={''} />
    </MotionSection>
    <MotionSection delay={0.1}>
      <Timeline />
    </MotionSection>
  </>
);

export default IndexPage;
