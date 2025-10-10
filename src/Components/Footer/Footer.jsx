import { React, useEffect, useRef } from "react";
import { Container } from "../Global-Components/Container";
import * as S from "./Footer-style";
import Link from "./Link";
import Back from "./Back";
import { Button } from "./Button";
import AnhorList from '../../json/Lists/Anhor_List.json';
import useOpenModal from "../../Hooks/ModalsHooks/useOpenModal";

export default function Footer({ scrollAnhor, setPrivacyModal, setTermsModal }) {

  const openModalTerms = useOpenModal("terms");
  const openModalPrivacy = useOpenModal("privacy");

  const refParentPrivacy = useRef(null);
  const refPrivacy = useRef(null);
  const refTerms = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1200px)");
    function moveElement() {
      if (!refParentPrivacy.current || !refPrivacy.current || !refTerms.current) return;
      if (media.matches) {
        refParentPrivacy.current.append(refPrivacy.current);
        return;
      }
      refTerms.current.before(refPrivacy.current);
    }
    window.addEventListener("resize", moveElement);
    return () => {
      window.removeEventListener("resize", moveElement);
    }

  }, [])



  return (
    <S.Footer>
      <Container>
        <S.FooterBody>
          <S.FooterWrapper>
            <S.FooterInfo>Innovate. Customize. Collaborate.</S.FooterInfo>
            <div>
              <S.FooterLink href="#0">support@paylect.com</S.FooterLink>
              <br />
              <S.FooterBottomText>
                Paylect Limited Liability Company
                <br />
                Сompany number 3254 LLC 2023
                <br />
                Kingstown, St. Vincent and the Grenadines
              </S.FooterBottomText>
            </div>
          </S.FooterWrapper>
          <S.FooterBottom>
            <S.FooterAnhorBlock>
              {AnhorList.map((i, index) => (
                <div key={index}>
                  <Link list={i} scrollAnhor={scrollAnhor} />
                </div>
              ))}
              <S.Slash key="10">&#47;&#47;</S.Slash>
              <S.FooterPrivacy ref={refParentPrivacy} key="11">
                <Button ref={refPrivacy} text="Privacy" action={openModalPrivacy} />
              </S.FooterPrivacy>
            </S.FooterAnhorBlock>
            <S.FooterTerms>
              <Button ref={refTerms} text="Terms" action={openModalTerms} />
            </S.FooterTerms>
            <S.FooterCopyright>
              <Back text="Back to top" scrollAnhor={scrollAnhor} />
              <div>©2024 Paylect.com</div>
            </S.FooterCopyright>
          </S.FooterBottom>
        </S.FooterBody>
      </Container>
    </S.Footer>
  );
}
