import styled from "styled-components";
import { SmBody, XsBody, XsBodyDark } from "../components/Typography";
import { CashBack } from "../images/whyChoose/CashBack";
import { Fame } from "../images/whyChoose/Fame";
import { CustomerService } from "../images/whyChoose/CustomerService";

const WhyChooseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme.spacings.lg}`};
`;

const WhyChooseTitle = styled.div`
  p {
    display: flex;
    flex-direction: row;
  }
  p:before,
  p:after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid ${({ theme }) => `${theme.colors.borderDivider}`};
    margin: auto;
  }
  p:before {
    margin-right: ${({ theme }) => `${theme.spacings.lg}`};
  }
  p:after {
    margin-left: ${({ theme }) => `${theme.spacings.lg}`};
  }
`;

const Section = styled.div`
  display: flex;
  gap: ${({ theme }) => `${theme.spacings.lg}`};
`;

export const WhyChooseSection = () => (
  <WhyChooseWrapper>
    <WhyChooseTitle>
      <SmBody>Why Choose LogoIpsum</SmBody>
    </WhyChooseTitle>
    <Section>
      <div>
        <CashBack />
      </div>
      <div>
        <XsBodyDark mb={2}>90-Day Money Back Guarantee</XsBodyDark>
        <XsBody>
          We love our products and we're confident you will too! If you're not
          in love with your LogoIpsum product, our easy return and refund policy
          is designed to make things as easy as possible for you.
        </XsBody>
      </div>
    </Section>
    <Section>
      <div>
        <Fame />
      </div>
      <div>
        <XsBodyDark mb={2}>Over 75,000+ Happy Customer</XsBodyDark>
        <XsBody>
          Everyone that tries LogoIpsum says it’s a must-have. We invest a lot
          of love and care into making our products, so you can enjoy seeing
          results when using it.
        </XsBody>
      </div>
    </Section>
    <Section>
      <div>
        <CustomerService />
      </div>
      <div>
        <XsBodyDark mb={2}>Professional Customer Support</XsBodyDark>
        <XsBody>
          Our customer service works 24/7 for your satisfaction. Feel free to
          reach out to us anytime.
        </XsBody>
      </div>
    </Section>
  </WhyChooseWrapper>
);
