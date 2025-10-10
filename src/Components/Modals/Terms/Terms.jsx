import { React } from "react";
import { ContainerModal } from "../../Global-Components/Container";
import * as S from "./Terms-style";
import * as M from '../Modal.style';
import ButtonClose from "../../Buttons/ButtonClose/ButtonClose";
import { useSelector } from "react-redux";
import useCloseModal from "../../../Hooks/ModalsHooks/useCloseModal";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import animationModal from "../AnimationModal";



const id = "terms";

export default function Terms() {

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
        onClick={(event) => { if (!event.target.closest('.modal-body')) closeModal() }}
      >
        <S.TermsScroll>
          <ContainerModal>
            <S.TermsBody className="modal-body">
              <S.BodyFixedButton>
                <S.BodyFixedBackground>
                  <ButtonClose action={closeModal} />
                </S.BodyFixedBackground>
              </S.BodyFixedButton>
              <S.TermsHeader>
                <S.TermsTitle>Terms of Service</S.TermsTitle>
              </S.TermsHeader>
              <S.TermsUpdated>Last updated: 26 November 2024</S.TermsUpdated>
              <S.TermsText>
                <p>
                  Paylect LLC is a limited liability company (“<b>Paylect</b>”, “<b>Company</b>” “
                  <b>we</b>” and its derivatives).
                </p>
                <p>
                  Paylect provides cryptocurrency payment processing and other related services
                  (collectively the “<b>Services</b>”) via its website paylect.com and related
                  desktop and mobile applications (“<b>Website</b>”) that enables you to accept
                  cryptocurrencies as a payment method in exchange for goods or services you sell to
                  your customers.
                </p>
                <p>
                  These Terms of Services (“<b>Terms</b>”, “<b>Agreement</b>”) govern your access to
                  and use of the Services provided by us and form a legally binding Terms between
                  Paylect and you or the entity you represent (“you”, "your"). Before using the
                  Services, please read these Terms carefully.
                </p>
                <p>
                  PLEASE ALSO NOTE THAT ACCORDING TO SECTION 3 BELOW, THESE TERMS DO NOT GOVERN ANY
                  INTERACTIONS YOU MAY HAVE WITH OUR THIRD-PARTY SERVICE PROVIDERS. EVERY
                  THIRD-PARTY SERVICE PROVIDER HAS ITS OWN TERMS.
                </p>
                <p>
                  Please note that section 12 on Dispute Resolution contains an arbitration clause
                  and class action waiver. By agreeing to this Agreement, you agree to resolve all
                  disputes through binding individual arbitration, which means that you waive any
                  right to have the dispute decided by a judge or jury, and you waive any right to
                  participate in collective action, whether that be a class action, class
                  arbitration, or representative action.
                </p>
              </S.TermsText>

              <ol>
                <S.TermsListItem>
                  TERMS BINDINGNESS
                  <S.TermsListOffset>
                    <p>
                      You are considered a party to this Agreement and deemed to have agreed with
                      the Terms by registering the account and/or using any other Services.
                    </p>
                    <p>By registering the account, you acknowledge that:</p>
                    <S.TermsSubList>
                      <li>any use of the Services is subject to these Terms;</li>
                      <li>you have carefully read, understand, and agree with these Terms;</li>
                      <li>you are of legal age;</li>
                      <li>
                        you have the authority to enter into the Terms personally or on behalf of
                        the legal entity for whom you are using the Service.
                      </li>
                    </S.TermsSubList>
                    <p>
                      You also represent that you are (i) not subject to sanctions or otherwise
                      designated on any list of prohibited or restricted parties, including but not
                      limited to the lists maintained by the United Nations Security Council, the
                      U.S. Government, the European Union, the United Kingdom, or other applicable
                      government authority and (ii) not located in any country subject to a
                      comprehensive sanctions program implemented by the United States or the
                      European Union.
                    </p>
                    <p>
                      Paylect reserves the right to modify these Terms at any time and our sole
                      discretion. In case of any change, we will amend the date of the last update
                      at the beginning of these Terms. By continuing to use our Services, you are
                      agreeing to new changes and will be legally bound by the new changes. Please
                      check this page regularly for updates.
                    </p>
                    <p>
                      ALL INFORMATION AND SERVICES PROVIDED ON THIS WEBSITE ARE PROVIDED ON A
                      STRICTLY “AS-IS” BASIS WITHOUT ANY WARRANTY WHATSOEVER.
                      <br />
                      IF YOU DO NOT AGREE TO THE TERMS, YOU SHALL NOT USE THE SERVICE OR THE
                      WEBSITE.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>

                <S.TermsListItem>
                  <S.TermsListTitle>SERVICES</S.TermsListTitle>
                  <S.TermsListOffset>
                    <S.TermsListSubtitle>2.1. Crypto processing</S.TermsListSubtitle>
                    <p>
                      Paylect provides you with access to a web-based platform that enables you to
                      accept digital assets as payment method for goods and services you sell to
                      your customers (“<b>Customers</b>”) As used herein, “<b>Digital Asset</b>”
                      means a digital asset (also called a “cryptocurrency,” “virtual currency,”
                      “digital currency,” or “virtual commodity”), such as bitcoin or ether, which
                      is a digital representation of value based on (or built on top of) a
                      cryptographic protocol of a computer network.
                    </p>
                    <p>
                      You authorize us to receive Digital Assets, temporary hold, exchange and
                      disburse them, as well as deduct the applicable fees and other costs on your
                      behalf, and to take any actions that we find necessary or desirable to provide
                      our Services to you and to comply with any applicable law and these Terms.
                    </p>
                    <p>
                      Payment by a Customer to Paylect is considered the same as payment made
                      directly to you. We collect Digital Assets to your Account exclusively for you
                      and on behalf of you. You remain the owner of Digital Assets that we hold for
                      you and on behalf of you.
                    </p>
                    <S.TermsListSubtitle>2.2 Crypto custody</S.TermsListSubtitle>
                    <p>
                      Paylect provides you with a digitally secured wallet for Digital Assets, aimed
                      at exchanging, storing, and withdrawing Digital Assets.
                    </p>
                    <p>
                      You can withdraw Digital Assets at any time at your sole discretion, however,
                      it may be subject to Account transaction limits and temporary or permanent
                      restrictions imposed in the course of an internal investigation or by law
                      enforcement authorities. You can withdraw your Digital Assets in any amount,
                      provided there are enough Digital Assets to cover the applicable fees.
                    </p>
                    <p>
                      The Company shall not be liable for the transfer of your Digital Assets to
                      other crypto wallets. You are solely responsible for the accuracy of
                      information required for carrying out a withdrawal. Paylect recommends you
                      always double-check the accuracy of information provided for withdrawal
                      purposes.
                    </p>
                    <p>
                      Please note that blockchain transactions are irreversible. Once the
                      transaction has been sent to the blockchain network upon your request, you
                      acknowledge that Paylect cannot reverse it.
                    </p>
                    <S.TermsListSubtitle>2.3. Crypto to crypto exchange</S.TermsListSubtitle>
                    <p>
                      You will be able to convert one Digital Asset to another Digital Asset. By
                      providing you with such a service, Paylect will provide you with information
                      about an exchange rate for the given trading pair and further instructions to
                      complete the exchange transaction.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>

                <S.TermsListItem>
                  <S.TermsListTitle>THIRD-PARTY SERVICES</S.TermsListTitle>
                  <S.TermsListOffset>
                    <p>
                      The Company may integrate or may allow you to access services developed by
                      third parties (“<b>Third Party Service</b>”). The Company retains the
                      exclusive right to add to, modify, or cancel the availability of any Third
                      Party Service.
                    </p>
                    <p>
                      You acknowledge that all Third third-party services and other related
                      information provided to you via the Website are executed by Third third-party
                      service providers and that Paylect does not itself directly provide any such
                      services and does not bear any liability for the accuracy of such services.
                    </p>
                    <p>
                      You agree that access to Third Party Service providers may be subject to
                      different regulations and their own internal policies and procedures where
                      Third Party Service providers may geo-block service for some jurisdictions or
                      refuse to provide a service to you.
                    </p>
                    <p>
                      You acknowledge the availability of the Third Party Services to you, subject
                      to the terms and conditions of each Third Party Service provider. To the
                      extent Third Party Service providers have terms that differ from these Terms,
                      you may be required to agree to those terms in order to access their software,
                      site, or services.
                    </p>
                    <p>
                      You agree that Paylect shall not be responsible for your use of the Third
                      Party Services.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>

                <S.TermsListItem>
                  <S.TermsListTitle>FEES</S.TermsListTitle>
                  <S.TermsListOffset>
                    <p>
                      Fees, if applicable to the Services or any part of the Services, shall be
                      displayed on the Website or in the Account and/or in the Paylect desktop or
                      mobile applications.
                    </p>
                    <p>
                      Paylect may change the fee structure at any time (including adding new fees
                      for new Services) and reserves the right to do so at its sole discretion. You
                      will be notified via email or posts on the Website or social media about any
                      changes in the fee structure
                    </p>
                    <p>
                      Fees are usually paid in Digital Assets that correspond to the respective
                      Service.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>

                <S.TermsListItem>
                  <S.TermsListTitle>
                    YOUR ACCOUNT, YOUR RIGHTS, OBLIGATIONS AND LIABILITY
                  </S.TermsListTitle>
                  <S.TermsListOffset>
                    <p>
                      Paylect is committed to preventing its’ Services from being used for money
                      laundering and terrorist financing crimes. As such, we are required to collect
                      certain information from you to comply with anti-money laundering and
                      anti-terrorist funding policies and regulations. During the process of
                      registering your account (“<b>Account</b>”), you will be asked to submit
                      information about you and/or your business such as your identification
                      information, contact details, company website, the nature of your expected
                      transactions, and your field of industry, etc.. You may be asked to submit
                      additional information and/or documents to enable us to verify your identity.
                      For more information, please, read the AML Policy.
                    </p>
                    <p>
                      The information you provide at the time of opening the Account must be
                      accurate and complete, and you must inform us about any changes to such
                      information. Paylect has the right to reject your Account registration, to
                      later close your Account, or to restrict the provision of the Services to you
                      if you do not provide and maintain accurate, complete, and satisfactory
                      information.
                    </p>
                    <p>
                      You also agree not to use our Services for any prohibited activities
                      (“Prohibited Activities”). The list of Prohibited Activities is non-exhaustive
                      and we reserve the right to modify it at any time. It is within our sole
                      discretion to determine whether an activity falls into a Prohibited Activities
                      category. The non-exhaustive list of Prohibited Activities is the following:
                    </p>
                    <S.TermsSubList>
                      <li>
                        Drugs and drug paraphernalia (e.g., narcotics, controlled substances, and
                        any equipment designed for making or using drugs);
                      </li>
                      <li>Marijuana/cannabis dispensaries and related products and businesses;</li>
                      <li>
                        Weapons, munitions, gunpowder, and other explosives (including fireworks);
                      </li>
                      <li>Toxic, flammable, and radioactive materials;</li>
                      <li>Pseudo-pharmaceuticals;</li>
                      <li>Substances designed to mimic illegal drugs;</li>
                      <li>Sexually explicit content;</li>
                      <li>Sexually-related services;</li>
                      <li>
                        Pyramid and investment schemes, multi-level marketing schemes, and other
                        unfair, predatory or deceptive practices;
                      </li>
                      <li>Credit and collection services;</li>
                      <li>
                        Items that infringe or violate any intellectual property rights such as
                        copyrights, trademarks, trade secrets, or patents, including counterfeit or
                        unauthorized goods;
                      </li>
                      <li>Products and services with varying legal status from state to state;</li>
                      <li>
                        Transactions that disclose the personal information of third parties in
                        violation of applicable law.
                      </li>
                    </S.TermsSubList>
                    <p>You are obligated to:</p>
                    <S.TermsSubList>
                      <li>
                        Not violate any laws or rights of Paylect and third persons when using the
                        Service;
                      </li>
                      <li>
                        Not circumvent or attempt to circumvent the security measures Paylect is
                        using to protect accounts, computer systems, or networks connected to the
                        Services;
                      </li>
                      <li>
                        Not violate, misappropriate, or infringe the rights of Paylect, our users,
                        or others, including privacy, publicity, intellectual property, or other
                        proprietary rights;
                      </li>
                      <li>
                        Not avoid, bypass, remove, deactivate, impair, descramble, or otherwise
                        circumvent any technological measure implemented by us or any of our service
                        providers or any other third party (including another user) to protect the
                        Services or content;
                      </li>
                      <li>Not disguise your location through IP proxying or other methods;</li>
                      <li>Use the Service in good faith</li>
                      <li>
                        Not to use the service for any illegal activities, Prohibited Activities, or
                        causing damage.
                      </li>
                    </S.TermsSubList>
                    <p>
                      You are liable in full to Paylect for any damage caused by you to Paylect by
                      breaching any of these obligations.
                    </p>
                    <p>
                      You must comply with all applicable laws, regulations, licensing requirements,
                      and third-party rights (including, without limitation, data privacy laws) in
                      your use of the Services. We may refuse to process or cancel any pending
                      Digital Assets transaction as required by law or any court or other authority
                      to which we are subject in any jurisdiction. Paylect further reserves the
                      right to delay any Digital Asset transaction if we perceive a risk of fraud or
                      illegal activity. We also have the right to refuse to process or cancel any
                      Digital Asset transaction due to technological issues with the blockchain
                      software, our software, or for other technological reasons.
                    </p>
                    <p>
                      You agree that you are responsible for determining what, if any, taxes apply
                      to the transactions performed via the Services, and it is your responsibility
                      to report the correct tax to the appropriate tax authority. You agree that we
                      are not responsible for determining whether taxes apply to your transactions
                      or for collecting, reporting, or withholding any taxes arising from any
                      transactions.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>
                <S.TermsListItem>
                  <S.TermsListTitle>PAYLECT’S RIGHTS AND OBLIGATIONS</S.TermsListTitle>
                  <S.TermsListOffset>
                    <p>
                      Paylect may, in its sole discretion and without cost to you and at any time,
                      modify or discontinue, temporarily or permanently, any portion of our
                      Services.
                    </p>
                    <p>
                      Without prejudice of our own, Paylect shall not control, monitor, assess,
                      authorize, and/or supervise the activities of you and your own Customer’s
                      purchases. The foregoing does not preclude us from exercising our right to
                      investigate, suspend, restrict, or terminate the provision of Services to you
                      at any time, as well as to refuse to complete, block, or reverse a transaction
                      initiated by your Customer if we reasonably believe that it violates these
                      Terms or other circumstances may infringe our, your or the public’s legitimate
                      interests.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>
                <S.TermsListItem>
                  <S.TermsListTitle>LIMITED INTELLECTUAL PROPERTY LICENSE</S.TermsListTitle>
                  <S.TermsListOffset>
                    <p>
                      Paylect retains full industrial, intellectual, copyright, or related property
                      rights over the Paylect trademark and all its components, including the
                      software, images any information, including documentation, procedures, and its
                      updates or developments, or derivations, that is provided, disclosed, or
                      transmitted to you in connection with the access, execution, and use of the
                      Services.
                    </p>
                    <p>
                      Subject to your compliance with this Agreement, Paylect grants you a
                      non-transferable, non-sublicensable, non-assignable, and non-exclusive license
                      to use the Services for your personal or internal business purposes.
                    </p>
                    <p>
                      By accessing the Services, you agree not to: (i) sublicense, sell, rent,
                      lease, transfer, assign, reproduce, distribute, host, or otherwise
                      commercially exploit the Services; (ii) integrate Paylect’s Services into your
                      service that you provide to a third party without our prior written consent;
                      (iii) reverse engineer, disassemble, decompile, translate, or otherwise seek
                      to obtain or derive the source code; (iv) to redistribute the Paylect software
                      or any of the Services, modify any code or use any Paylect content, including
                      images and text, as part of any other software or project of any kind.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>
                <S.TermsListItem>
                  <S.TermsListTitle>DISCLAIMER OF WARRANTIES</S.TermsListTitle>
                  <S.TermsListOffset>
                    <p>
                      The Services are provided to you “as-is” and without any warranty whatsoever,
                      to the maximum extent permissible by law. Without limiting the generality of
                      the foregoing, Paylect does not warrant that Paylect is fit for your purpose,
                      even if you have previously provided notice of your intended purpose, and does
                      not warrant that Paylect will operate in a virus-free manner.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>
                <S.TermsListItem>
                  <S.TermsListTitle>LIMITATION OF LIABILITY</S.TermsListTitle>
                  <S.TermsListOffset>
                    <p>
                      IN NO EVENT WILL PAYLECT OR OUR AFFILIATES, OR ANY OF OUR RESPECTIVE
                      SHAREHOLDERS, MEMBERS, DIRECTORS, OFFICERS, EMPLOYEES, ATTORNEYS, AGENTS,
                      REPRESENTATIVES, SUPPLIERS OR CONTRACTORS BE LIABLE TO YOU FOR: ANY DIRECT
                      DAMAGES OR ANY LOST PROFITS, REVENUE OR DATA, DIRECT OR INDIRECT, INCIDENTAL,
                      SPECIAL, OR CONSEQUENTIAL DAMAGES, OR DAMAGES OR COSTS DUE TO LOSS OF
                      PRODUCTION OR USE, BUSINESS INTERRUPTION, OR PROCUREMENT OF SUBSTITUTE GOODS
                      OR SERVICES ARISING OUT OF OR IN CONNECTION WITH THE SERVICE OR THE SOFTWARE,
                      WHETHER OR NOT PAYLECT HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES,
                      AND REGARDLESS OF THE THEORY OF LIABILITY ASSERTED, WHICH HAVE RESULTED FROM:
                      (I) YOUR USE OF, OR CONDUCT IN CONNECTION WITH, OUR SERVICES; (II) ANY
                      INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES; OR (III)
                      ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT ARE FOUND IN THE SERVICES
                      OR THAT MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY
                      (REGARDLESS OF THE SOURCE OF ORIGINATION).
                    </p>
                    <p>
                      IN NO EVENT SHALL OUR LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT OF
                      ONE HUNDRED U.S. DOLLARS ($USD 100.00) OR ITS EQUIVALENT IN THE LOCAL CURRENCY
                      OF THE APPLICABLE JURISDICTION.
                    </p>
                    <p>
                      Paylect is not responsible for, and cannot assist with recovery of, a loss of
                      Digital Assets incurred by you if the Paylect Services are compromised, for
                      example, due to loss of or unauthorized access to private keys, accidental
                      sharing of a backup, a bug in your device or the Paylect software, or a
                      malicious attack on Paylect.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>
                <S.TermsListItem>
                  <S.TermsListTitle>INDEMNITY</S.TermsListTitle>
                  <S.TermsListOffset>
                    <p>
                      To the extent permitted by applicable law, you agree to defend, indemnify, and
                      hold harmless us, our affiliates, and our respective shareholders, members,
                      directors, officers, employees, attorneys, agents, representatives, suppliers,
                      and contractors, from and against any and all claims, damages, obligations,
                      losses, liabilities, tort, costs or debt, and expenses (including, but not
                      limited to, attorney’s fees or other legal costs) arising from: (a) your use
                      of and access to the Services; (b) any feedback or submissions you provide to
                      us concerning Paylect; (c) violation of any third party content (d) your
                      violation of the Terms; or (e) your violation of any law, rule, or regulation,
                      or the rights of any third party.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>
                <S.TermsListItem>
                  <S.TermsListTitle>TERM AND TERMINATION</S.TermsListTitle>
                  <S.TermsListOffset>
                    <p>
                      The Terms commence on the date when you accept them. The contents of the terms
                      may change from time to time as prescribed in these Terms.
                    </p>
                    <p>We may, by giving notice, at our sole discretion:</p>
                    <S.TermsSubList>
                      <li>
                        Limit, suspend, or terminate your access to the Service, the Website, and/or
                        your Account;
                      </li>
                      <li>Prohibit access to the Website and its content, services and tools;</li>
                      <li>Delay or remove hosted content; and</li>
                      <li>
                        Take technical and legal steps to keep you off the Website if we suspect
                        that you are creating problems or possible legal liabilities, infringing the
                        intellectual property rights of third parties, or acting inconsistently with
                        the spirit of these Terms.
                      </li>
                    </S.TermsSubList>
                    <p>
                      Additionally, we may, in appropriate circumstances and at our discretion,
                      suspend or terminate your Account for any reason, including without limitation
                      for:
                    </p>
                    <S.TermsSubList>
                      <li>
                        Attempts to gain unauthorized access to the Website or another Account or
                        assisting others attempting to do so;
                      </li>
                      <li>
                        Overcoming software security features limiting the use of or protecting any
                        content; Usage of the Service to perform illegal activities such as money
                        laundering, financing terrorism, or other criminal activities;
                      </li>
                      <li>Violations of these Terms;</li>
                      <li>A failure to pay or a fraudulent payment for transactions;</li>
                      <li>Unexpected operational difficulties; or</li>
                      <li>Upon the request of law enforcement or other government agencies.</li>
                    </S.TermsSubList>
                    <p>
                      You may close your Account at any time by our policies and procedures by
                      withdrawing all balances. Upon closure of your Account, you authorize us to
                      cancel or suspend any pending transactions at the time of cancellation and any
                      balance in your Account will be delivered to you or your digital currency
                      address as instructed less any outstanding amounts owed to us, the
                      unsubsidized coin/miner network transaction fee and any other third party
                      charges.
                    </p>
                    <p>
                      In the event your Account is closed, whether by you or us, any digital assets
                      in your Account must be claimed and removed by you within 30 days of your
                      Account’s closure date. If you fail to claim and remove Digital Assets in your
                      Account within 30 days of your Account’s closure date, a recovery and return
                      fee equal to ten percent (10%) of all the Digital Assets in your Account will
                      be charged by us, if the Digital Assets can be recovered and returned at all,
                      and we reserve the right in our sole discretion to not attempt to recover and
                      return to you small amounts.
                    </p>
                    <p>
                      You may not terminate your Account as a means of evading investigation or
                      inquiries by us. If any queries or investigations are pending at the time you
                      request closure of your Account, we may refuse your request to close your
                      Account and/or hold your Digital Assets as appropriate to protect us against
                      financial and/or legal liability. If you are later determined to be entitled
                      to some or all of the Digital Assets in dispute, we will transfer such Digital
                      Assets to you. You will remain responsible and liable for all obligations
                      related to your Account even after the closure of an Account.
                    </p>
                    <p>
                      If we suspend or close your Account or terminate your use of the Services for
                      any reason, we reserve the right to require you to provide identity
                      verification information and comply with identity verification procedures
                      before permitting you to transfer or withdraw Digital Assets.
                    </p>
                    <p>
                      If you do not access your Account for three years and we have been unable to
                      contact you after three attempts at the last email address we have for you in
                      our records, your Account may be terminated at our sole discretion. Moreover,
                      if we hold Digital Assets on your behalf which you have failed to claim, we
                      may be required to deliver any such Digital Assets to the authorities in
                      certain jurisdictions as unclaimed property. We reserve the right to deduct a
                      dormancy fee or other administrative charges from such unclaimed funds, as
                      permitted by applicable law.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>
                <S.TermsListItem>
                  <S.TermsListTitle>
                    ARBITRATION, WAIVER OF CLASS ACTION AND JURY TRIAL AND GOVERNING LAW
                  </S.TermsListTitle>
                  <S.TermsListOffset>
                    <p>
                      Any disputes arising from or in relation to this Agreement shall be first
                      tried to be settled by negotiations between you and Paylect. In the case we do
                      not reach a consensus with you, you agree that ARBITRATION PREVENTS YOU FROM
                      SUING IN COURT OR FROM HAVING A JURY TRIAL. YOU HEREBY WAIVE THE TRIAL BY
                      JURY.
                    </p>
                    <p>
                      Any dispute, controversy, or claim arising out of or in connection with this
                      Agreement or your use of the Services on an individual basis shall be finally
                      settled in arbitration agreed between you and us, by a sole arbitrator, in the
                      English language, with limited discovery. At your request, the hearings may be
                      conducted in person or virtually, and the arbitrator may provide for
                      submitting and determining motions on briefs, without oral hearings. The
                      arbitration shall be kept confidential and you shall not disclose to any
                      person, other than those necessary to the proceedings, the existence of the
                      arbitration, any information submitted during the arbitration, any documents
                      submitted in connection with it, any oral submissions or testimony,
                      transcripts, or any award unless disclosure is required by law or is necessary
                      for permissible court proceedings, such as proceedings to recognize or enforce
                      an award.
                    </p>
                    <p>
                      Other than class procedures and remedies discussed below, the arbitrator has
                      the authority to grant any remedy that would otherwise be available to a court
                      or other tribunal. THE PREVAILING PARTY IN ANY ACTION OR PROCEEDING TO ENFORCE
                      THESE TERMS SHALL BE ENTITLED TO LEGAL COSTS AND ATTORNEYS’ FEES. WHETHER THE
                      DISPUTE IS HEARD IN ARBITRATION OR COURT, YOU AGREE NOT TO COMMENCE A CLASS
                      ACTION, CLASS ARBITRATION, OR REPRESENTATIVE ACTION OR PROCEEDING.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>
                <S.TermsListItem>
                  <S.TermsListTitle>PRIVACY</S.TermsListTitle>
                  <S.TermsListOffset>
                    <p>
                      By using the Service, you agree that Paylect may collect some information
                      about you as You agree with these Terms. Please read carefully our Privacy
                      Policy for more information.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>
                <S.TermsListItem>
                  <S.TermsListTitle>FORK AND AIRDROPS</S.TermsListTitle>
                  <S.TermsListOffset>
                    <p>
                      Paylect has no control over the software protocols that govern or constitute
                      the framework of Digital Assets. Therefore, Paylect assumes no responsibility
                      for the update or any modification of the underlying protocols, and Paylect is
                      not able to guarantee their functionality, security, or availability.
                    </p>
                    <p>
                      By accepting the present Terms, you acknowledge and accept the risk that
                      underlying software protocols relating to any of the Digital Asset available
                      on the Website are likely to be subject to sudden changes in operating rules
                      (hereafter “<b>fork</b>”) or distribution of Digital Asset (“<b>airdrops</b>
                      ”), and such forks or airdrops may materially affect the value, function
                      and/or the name of the virtual currencies that are exchanged or acquired
                      through the Website.
                    </p>
                    <p>
                      Paylect will use reasonable endeavors to provide you with notice of forks or
                      airdrops by publishing such a notice on the Website, including, to the extent
                      possible, whether Paylect intends to support airdrops, either or both branches
                      of a fork, and you agree that you will read such notices to decide in that
                      respect. However, we have no obligation to support any specific forks,
                      airdrops, or similar distribution events.
                    </p>
                    <p>
                      It is your responsibility to make yourself aware of, and consider how to deal
                      with, upcoming forks or airdrops, including whether to give us instructions
                      for the withdrawal of the balance of any Digital Assets. In the event of a
                      fork or airdrop, there is a risk that Paylect may need to temporarily suspend
                      operations about that fork or airdrop without providing advance notice to you.
                      Paylect may, in its reasonable discretion, decline to support either or both
                      branches of a fork or airdrop.
                    </p>
                    <p>
                      In the event of a fork or an airdrop which affects Digital Assets held
                      pursuant to these Terms, and which is unsupported by Paylect:
                    </p>
                    <S.TermsSubList>
                      <li>
                        We will not acquire any right, title, or interest in the unsupported forked
                        or airdropped Digital Asset; and
                      </li>
                      <li>
                        We may be unable to give effect to any instructions given in respect of
                        those Digital Assets and Paylect will have no liability to you in respect of
                        the unsupported forked or airdropped Digital Assets.
                      </li>
                    </S.TermsSubList>
                    <p>
                      By agreeing to the present Terms, you acknowledge the risks presented by forks
                      or airdrops and you accept that we have no responsibility to assist you to
                      move or sell Digital Assets of an unsupported branch of a forked or airdropped
                      protocol.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>
                <S.TermsListItem>
                  <S.TermsListTitle>MISCELLANEOUS</S.TermsListTitle>
                  <S.TermsListOffset>
                    <p>
                      <b>15.1. Term</b>. This Agreement shall govern the relations between you and
                      Paylect during or while you use (or misuse) the Services.
                    </p>
                    <p>
                      <b>15.2. Waiver</b>. No action or inaction on the part of Paylect shall be
                      considered a waiver of any right or obligation by Paylect.
                    </p>
                    <p>
                      <b>15.3. Force Majeure</b>. Paylect shall not be held liable for any delays,
                      failure in performance, or interruptions of service which result directly or
                      indirectly from any cause or condition beyond our reasonable control,
                      including but not limited to: any delay or failure due to any acts of God,
                      acts of civil or military authorities, acts of terrorism, civil or industrial
                      disturbances, blockages, embargoes, war, strikes or other labor disputes,
                      fire, earthquakes, storms or other nature-related events, interruption in
                      electrical telecommunications or Internet services or network provider
                      services, failure of hardware equipment and/or software or other utility
                      failures, smart contract bugs or weaknesses, technological changes, changes in
                      interest rates or other monetary conditions, and, for the avoidance of doubt,
                      changes to any blockchain-related protocol, other catastrophe, or any other
                      occurrences which are beyond our reasonable control, and shall not affect the
                      validity and enforceability of any remaining provisions. If we are unable to
                      perform our Services outlined in the Terms due to factors beyond our control,
                      including, but not limited to, the aforementioned force majeure events or
                      changes in applicable laws and/or sanctions policies, we shall not be liable
                      for the Services provided under these Terms during the time period coincident
                      with the event in question.
                    </p>
                    <p>
                      <b>15.4. Assignment</b>. You agree that we may assign any of our rights and/or
                      transfer, sub-contract, or delegate any of our obligations under these Terms
                      without any notice or consent from you. Your agreement to these Terms is
                      personal to you and you may not transfer or assign it to any third party.
                    </p>
                    <p>
                      <b>15.5. Refunds</b>. You agree that any disputes or legal actions in relation
                      to refunds are solely between you and your Customer. You agree to have a clear
                      refund policy. We are not a party to relations between you and your Customers
                      making payments in Digital Assets. We do not accept any queries, letters,
                      requests, and/or complaints as well as liability for the quality, legality,
                      safety, delivery, or any other aspect regarding you, your services, products,
                      activities, and/or payment and/or a donation, a purchase related to the
                      relation between you and your Customers. Any disputes between you and your
                      Customer shall be resolved exclusively between both of you.
                    </p>
                    <p>
                      <b>15.6. Notices</b>. Any notices or other communications provided by us under
                      these Terms, including those regarding modifications to it will be given by
                      posting to the Services and/or through other electronic communication. You
                      agree and consent to receive electronically all communications, agreements,
                      documents, notices, and disclosures that we provide in connection with your
                      use of the Services and will be legally bound by these notices.
                    </p>
                  </S.TermsListOffset>
                </S.TermsListItem>
              </ol>
            </S.TermsBody>
          </ContainerModal>
        </S.TermsScroll>
      </M.ModalWrapper>
    </>
  );
}

/* 













 */
