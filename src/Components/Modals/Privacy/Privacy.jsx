import { React } from "react";
import { ContainerModal } from "../../Global-Components/Container";
import * as S from "./Privacy-style";
import * as M from "../Modal.style";
import ButtonClose from "../../Buttons/ButtonClose/ButtonClose";
import useCloseModal from "../../../Hooks/ModalsHooks/useCloseModal";
import { useSelector } from "react-redux";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import animationModal from "../AnimationModal";


const id = "privacy";

export default function Privacy() {

  const closeModal = useCloseModal(id);
  const isOpen = useSelector(state => state.modals[id].isOpen)

  // if (!isOpen) return null;

  return (
    <>
      <BackgroundModal isOpen={isOpen} />

      <M.ModalWrapper
        id={id}
        data-lenis-prevent
        style={animationModal(isOpen)}
        onClick={(event) => { if (!event.target.closest(".modal-body")) closeModal() }}
      >
        <S.PrivacyScroll>
          <ContainerModal>
            <S.PrivacyBody className="modal-body">
              <S.BodyFixedButton>
                <S.BodyFixedBackground>
                  <ButtonClose action={closeModal} />
                </S.BodyFixedBackground>
              </S.BodyFixedButton>
              <S.PrivacyHeader>
                <S.PrivacyTitle>Privacy Policy</S.PrivacyTitle>
                {/* <S.HideButton>
                  <ButtonClose />
                </S.HideButton> */}
              </S.PrivacyHeader>
              <S.PrivacyUpdated>Last updated: 26 November 2024</S.PrivacyUpdated>
              <S.PrivacyText>
                <p>
                  At Paylect, we process your personal data in accordance with applicable privacy
                  laws and this Privacy Policy explains what information we collect about you, how
                  we use it, and your rights. We have implemented different technical and
                  organizational solutions to comply with applicable legislation related to the
                  processing of personal data, privacy, and data security in countries where we
                  operate or where the applicable law applies to us. The Privacy Policy sets forth
                  the basic rules and principles by which we process your personal data, and
                  mentions our responsibilities while processing your personal data according to
                  transparency obligations. We do not intend to collect personal data of children or
                  persons under the age of 18 (eighteen) years old. Our Privacy Policy covers all
                  personal data that you submit to us or that we obtain about you when you use our
                  Services or the Website.
                </p>
              </S.PrivacyText>

              <ol>
                <S.PrivacyListItem>
                  LEGAL GROUNDS FOR PROCESSING YOUR PERSONAL DATA
                  <S.PrivacyListOffset>
                    <p>
                      Any operation related to the processing of personal data must have a legal
                      basis for the processing. We collect any data only on lawful grounds and only
                      data that is necessary to provide our Services to you. We use the main four
                      grounds to process your personal data: consent, contract, legal obligation,
                      and legitimate interests.
                    </p>
                    <p>
                      <b>Consent</b> – freely given, informed, and unambiguous indication of your
                      wishes to the processing of your personal data for a specific purpose which
                      signifies agreement to the processing of personal data.
                    </p>
                    <p>
                      <b>Contract</b> – a legal ground for the processing of the personal data
                      necessary for us to perform a contract or the Terms of Service to which you
                      are a party or in order to take steps at your request prior to entering into
                      the contract or the Terms of Service.
                    </p>
                    <p>
                      <b>Legal obligations</b> – a legal ground for the processing of personal data
                      when there is an obligation to comply with a legal obligation to which we are
                      subject;
                    </p>
                    <p>
                      <b>Legitimate Interests</b> – a legal ground for the processing of personal
                      data when it is based on our legitimate interests or the legitimate interests
                      of a third party, provided that those interests are not outweighed by your
                      rights and interests and those interests have a specific purpose, they are
                      necessary, and they are balanced.
                    </p>
                    <p>
                      Applicable laws have other legal grounds for the processing and when they are
                      applicable we will use such grounds to process the personal data.
                    </p>
                  </S.PrivacyListOffset>
                </S.PrivacyListItem>

                <S.PrivacyListItem>
                  <S.PrivacyListTitle>WHAT INFORMATION WE COLLECT</S.PrivacyListTitle>
                  <S.PrivacyListOffset>
                    <p>The types of personal data we may collect include:</p>
                    <S.PrivacySubList>
                      <li>Contact details (email, telephone number, or messenger ID)</li>
                      <li>
                        Details of your identity and other information required for KYC/AML
                        compliance
                      </li>
                      <li>Financial information</li>
                      <li>Employment details</li>
                      <li>Geolocation details</li>
                      <li>History of your logs and activity on the Website</li>
                      <li>History of your logs and activity on the Website</li>
                    </S.PrivacySubList>
                    <p>
                      IP address, browser, and operating system information, and device fingerprint.
                      You provide directly to us most of the information. However, we may obtain
                      information about you from third-party sources as required or permitted by
                      applicable law, such as public databases, credit bureaus, ID verification
                      partners, resellers and channel partners, and business partners. We obtain
                      such information to comply with our internal policies, such as anti-money
                      laundering (AML) laws, which is our lawful basis for processing, and to
                      provide you with our Services. In some cases, we can process additional data
                      about you to ensure our Services are not used fraudulently or for other
                      illicit activities.
                    </p>
                    <p>
                      Kindly note that we will not be able to provide our services to you if you
                      refuse to provide us with information according to our KYC/AML requirements
                      communicated to you once you decide to apply for any of our Services that
                      require verification of identity and ongoing monitoring of activity. Please
                      keep in mind that in some cases we may require additional details and
                      documents for KYC and AML/CTF purposes.
                    </p>
                    <p>
                      Please note that processing of your data may include automated decision-making
                      including profiling. We may apply automated decision-making including
                      profiling for onboarding, maintaining the account with us, and fraud
                      prevention purposes.
                    </p>
                  </S.PrivacyListOffset>
                </S.PrivacyListItem>

                <S.PrivacyListItem>
                  <S.PrivacyListTitle>
                    HOW DO WE GET PERSONAL DATA AND WHY DO WE HAVE IT?
                  </S.PrivacyListTitle>
                  <S.PrivacyListOffset>
                    <p>
                      We will only process information that is necessary for the purpose for which
                      it has been collected.
                    </p>
                    <S.PrivacyListSubtitle>
                      3.1. Consent rules and related purposes
                    </S.PrivacyListSubtitle>
                    <p>
                      Where you have provided your consent, we may use and process your information
                      to contact you about offers, promotions, events, services, or information that
                      we think will be of interest to you. We also process personal data we obtain
                      from optional cookies that we set on the Website based on your consent. In
                      case the legal basis is consent, you can withdraw your consent at any time via
                      available options.
                    </p>
                    <p>
                      If you do withdraw your consent, and if we do not have another legal basis for
                      the processing of your data, then we will stop the processing of your data and
                      will delete it in specific situations, including in case you request the
                      deletion of your personal data and we are obliged to delete your personal data
                      according to the applicable law.
                    </p>
                    <p>
                      If we have another legal basis for the processing of your data, then we will
                      continue to do so, subject to your legal interests and rights.
                    </p>
                    <S.PrivacyListSubtitle>
                      3.2. Contract rules and related purposes
                    </S.PrivacyListSubtitle>
                    <p>
                      We use and process your personal data where this is necessary to perform a
                      contract or the Terms of Service with you and to fulfill and complete your
                      transactions entered into with us or provide the Services.
                    </p>
                    <S.PrivacyListSubtitle>
                      3.3. Legitimate interests’ rules and related purposes
                    </S.PrivacyListSubtitle>
                    <p>
                      We use and process your personal data as set out below where we must carry out
                      activities for which it is in our legitimate interests as a business to do so.
                    </p>
                    <p>
                      <i>User support:</i> to respond to correspondence you send to us and fulfill
                      the requests you make to us.
                    </p>
                    <p>
                      <i>Promotion of our business:</i> to contact you with marketing information in
                      certain cases; to contact you with targeted advertising delivered online
                      through social media, search engines, third-party websites or apps and
                      applications, and other platforms operated by other companies unless you
                      object or such activity requires your consent.
                    </p>
                    <p>
                      <i>Communication with you:</i> to communicate with you including to respond to
                      queries, complaints, or claims and to manage legal and regulatory requests and
                      requirements; to enforce or protect our legal rights or to establish, bring,
                      or defend legal claims.
                    </p>
                    <p>
                      <i>Administrative and technical aspects:</i> for network and information
                      security purposes; to comply with a request from you in connection with the
                      exercise of your rights; to inform you of updates to our terms and policies;
                      for cookies that are essential for our Website to function properly.
                    </p>
                    <p>
                      <i>Analytics:</i> to evaluate user behavior, including understanding the
                      effectiveness of existing product features, plan new features, or measure
                      audience size or characteristics
                    </p>
                    <p>
                      <i>
                        Preventing frauds, illegal activity, or any violation of the Terms of
                        Service or Privacy Policy:
                      </i>{" "}
                      We may disable access to the Website, and erase or correct personal data in
                      some cases.
                    </p>
                    <S.PrivacyListSubtitle>
                      3.4. Legal obligation’ rules and related purposes
                    </S.PrivacyListSubtitle>
                    <p>
                      We will process your personal data to comply with our legal or regulatory
                      requirements, for example, anti-money laundering (AML), and know your client
                      (KYC) rules.
                    </p>
                  </S.PrivacyListOffset>
                </S.PrivacyListItem>

                <S.PrivacyListItem>
                  <S.PrivacyListTitle>HOW DO WE PROCESS PERSONAL DATA?</S.PrivacyListTitle>
                  <S.PrivacyListOffset>
                    <p>
                      We share your data with our contractors provided these third parties assume
                      confidentiality obligations regarding your personal data and have sufficient
                      and appropriate safeguards of data protection.
                    </p>
                    <S.PrivacyListSubtitle>4.1. Disclosure of personal data</S.PrivacyListSubtitle>
                    <S.PrivacySubList>
                      <li>
                        Companies or organizations to which we pass the responsibility to handle the
                        Services on our behalf, or business partners or contractors with which we
                        have a data processing agreement or addendum;
                      </li>
                      <li>
                        Government or law enforcement officials or court in cases provided by law.
                      </li>
                    </S.PrivacySubList>
                    <S.PrivacyListSubtitle>4.2. Sharing of personal data</S.PrivacyListSubtitle>
                    <p>We share information for the following purposes:</p>
                    <S.PrivacySubList>
                      <li>to provide our Services to you or to administer them;</li>
                      <li>to comply with any applicable laws or regulations,</li>
                      <li>
                        to detect and investigate fraudulent or unlawful activity and respond to
                        claims and legal process;
                      </li>
                      <li>
                        to prevent or stop activity we consider to be, or to pose a risk of being,
                        illegal, unethical, or legally actionable or that poses a threat to the
                        safety of you, another person, or the public generally;
                      </li>
                      <li>
                        in case of any reorganizations of our company or transfer of control with
                        the transfer of all information to the relevant third party.
                      </li>
                    </S.PrivacySubList>
                    <S.PrivacyListSubtitle>
                      4.3. Purposes of the processing of personal data
                    </S.PrivacyListSubtitle>
                    <p>We process personal data for the following main purposes:</p>
                    <S.PrivacySubList>
                      <li>
                        <i>Providing services.</i> Legal basis: Contract.
                      </li>
                      <li>
                        <i>Providing newsletters/offers/updates which may be interesting to you.</i>{" "}
                        Legal basis: Consent for newsletters; Legitimate Interests for offers and
                        updates.
                      </li>
                      <li>
                        <i>
                          Compliance with applicable anti-money laundering and know your client's
                          rules.
                        </i>{" "}
                        Legal basis: Legal obligation.
                      </li>
                      <li>
                        <i>
                          Keeping the Website running (managing your requests, remembering your
                          settings, hosting, and back-end infrastructure).
                        </i>{" "}
                        Legal basis: Legitimate Interests.
                      </li>
                      <li>
                        <i>
                          Preventing fraud, illegal activity, or any violation of the terms or
                          Privacy Policy.
                        </i>{" "}
                        We may disable access to the Website, and erase or correct personal data in
                        some cases. Legal basis: Legitimate Interests.
                      </li>
                      <li>
                        <i>
                          Operating and improving the Website (testing features, interacting with
                          feedback platforms, managing landing pages, heat mapping the App, traffic
                          optimization, and data analysis and research, including profiling and the
                          use of machine learning and other techniques over your data and in some
                          cases using third parties to do this).
                        </i>{" "}
                        Legal basis: Legitimate Interests.
                      </li>
                      <li>
                        <i>
                          Customer support (notifying you of any changes to the Website, or
                          services, solving issues, any bug fixing, sending you announcements,
                          updates, and security alerts, which we send through a push notification,
                          and responding to your requests, questions, and feedback).
                        </i>{" "}
                        Legal basis: Legitimate Interests.
                      </li>
                    </S.PrivacySubList>
                  </S.PrivacyListOffset>
                </S.PrivacyListItem>

                <S.PrivacyListItem>
                  <S.PrivacyListTitle>DATA RETENTION PERIOD AND DATA SAFETY</S.PrivacyListTitle>
                  <S.PrivacyListOffset>
                    <p>We store your personal data in accordance with the legal requirements.</p>
                    <p>
                      We will keep your personal data for as long as it is necessary for the
                      purposes set out in this Privacy Policy.
                    </p>
                    <p>
                      We keep information that we need to resolve any disputes, enforce our
                      contracts, agreements, and terms with you, and provide you with the
                      possibility to use our Services, protect legal rights, and comply with
                      technical and legal requirements and constraints related to the security and
                      operation of our Services for as long as it is reasonably necessary or
                      required.
                    </p>
                    <p>
                      In some cases, there may be specific terms for the data retention periods.
                      Otherwise, we may delete information when it is not more reasonably necessary
                      to keep it to provide you the Services, to comply with applicable laws and
                      regulations, and to run our business.
                    </p>
                  </S.PrivacyListOffset>
                </S.PrivacyListItem>
                <S.PrivacyListItem>
                  <S.PrivacyListTitle>HOW DO WE KEEP PERSONAL DATA SAFE?</S.PrivacyListTitle>
                  <S.PrivacyListOffset>
                    <p>
                      We have implemented appropriate technical, procedural, and organizational
                      security measures designed to protect the security of any personal data we
                      process. We regularly monitor our systems for possible vulnerabilities and
                      attacks. Your information is stored on secure servers. We restrict access to
                      your personal data to those employees who are trained and instructed, have a
                      business reason to access, and have professional skills that allow them to
                      work with your personal data. Access control and encryption are the key
                      technologies for protecting data.
                    </p>
                    <p>
                      Additionally, data passing over networks, including the Internet, are
                      encrypted with HTTPS, security audits, and other technologies. In addition,
                      data is encrypted when it is stored or "at rest" within servers and hard
                      drives as well.
                    </p>
                    <p>
                      However, despite our safeguards and efforts to secure your information, no
                      electronic transmission over the Internet and information storage technology
                      can be guaranteed to be 100% secure, so we cannot promise and guarantee that
                      hackers, cybercriminals, or unauthorized third parties will not be able to
                      defeat our security, and improperly collect, access, steal, or modify your
                      information. Although we will do our best to protect your personal data, the
                      transmission of personal data to and from our Website is at your own risk. You
                      should only access the Website within a secure environment.
                    </p>
                  </S.PrivacyListOffset>
                </S.PrivacyListItem>
                <S.PrivacyListItem>
                  <S.PrivacyListTitle>YOUR DATA PROTECTION RIGHTS</S.PrivacyListTitle>
                  <S.PrivacyListOffset>
                    <p>You can exercise the following rights by contacting us.</p>
                    <p>
                      <b>You have the right to access information about you,</b> especially:
                    </p>
                    <S.PrivacySubList>
                      <li>the categories of data;</li>
                      <li>the purposes of data processing;</li>
                      <li>third parties to whom the data is disclosed;</li>
                      <li>
                        how long the data will be retained and the criteria used to determine that
                        period;
                      </li>
                      <li>other rights regarding the use of your data.</li>
                    </S.PrivacySubList>
                    <p>
                      The right to access information may be performed only by you or your legal
                      representative. In case you request the right to access information via a
                      legal representative, you have to provide proof of whether such a person may
                      represent you.
                    </p>
                    <p>
                      <b>You have the right to make us correct</b> any inaccurate personal data
                      about you.
                    </p>
                    <p>
                      <b>You can object</b> to using your personal data for profiling or making
                      automated decisions about you. We may use your data to determine whether we
                      should let you know the information that might be relevant to you.
                    </p>
                    <p>
                      <b>You have the right to restrict processing</b> – You have the right to ask
                      us to restrict the processing of your personal data in certain circumstances.
                    </p>
                    <p>
                      <b>You have the right to the data portability</b> of your data to another
                      service or website. We will give you a copy of your data in a readable format
                      so that you can provide it to another service. If you ask us and it is
                      technically possible, we will directly transfer the data to the other service
                      for you.
                    </p>
                    <p>
                      <b>You have the right to be “forgotten”</b>. You may ask to erase any personal
                      data about you if it is no longer necessary for us to store the data or in
                      other certain circumstances.
                    </p>
                  </S.PrivacyListOffset>
                </S.PrivacyListItem>
                <S.PrivacyListItem>
                  <S.PrivacyListTitle>COOKIES</S.PrivacyListTitle>
                  <S.PrivacyListOffset>
                    <p>
                      A cookie is a small piece of data that is stored on your computer or mobile
                      device. We use cookies and similar technologies to collect additional Website
                      usage data and to operate our Services. Our Services use cookies to
                      distinguish you from other users. This helps us to provide you with a good
                      experience and allows us to improve our Services.
                    </p>
                    <p>
                      We collect, process, and analyze data regarding the use of our Website.
                      Traffic data is data connected to visitors on the web page and data handled in
                      communication fields for sending, distributing, or making messages available.
                    </p>
                    <p>
                      We use necessary, preferential, statistical, and marketing cookies. For more
                      information, you may contact us.
                    </p>
                  </S.PrivacyListOffset>
                </S.PrivacyListItem>
                <S.PrivacyListItem>
                  <S.PrivacyListTitle>CONTACT</S.PrivacyListTitle>
                  <S.PrivacyListOffset>
                    <p>
                      If you have any questions about the Privacy Policy, or your personal data, or
                      you would like to exercise any of your data protection rights, please contact
                      us using the following email: support@paylect.com
                    </p>
                  </S.PrivacyListOffset>
                </S.PrivacyListItem>
              </ol>
            </S.PrivacyBody>
          </ContainerModal>
        </S.PrivacyScroll>
      </M.ModalWrapper>
    </>
  );
}

/* 













 */
