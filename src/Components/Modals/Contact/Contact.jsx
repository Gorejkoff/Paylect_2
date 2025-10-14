import { React, useRef } from "react";
import { ContainerLarge } from "../../Global-Components/Container";
import * as S from "./Contact-style";
import Input from '../../FormsElements/Input/Input';
import Textarea from "./Textarea";
import Button from "../../Buttons/ButtonText/Button";
import ButtonClose from "../../Buttons/ButtonClose/ButtonClose";
import InputMedia from "./Input-Media";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import { $api } from "../../../api";
import useCloseModal from "../../../Hooks/ModalsHooks/useCloseModal";
import useOpenModal from "../../../Hooks/ModalsHooks/useOpenModal";
import { useSelector } from "react-redux";
import animationModal from "../AnimationModal";


const id = "contacts";

export default function Contact() {
  const phoneInputValid = useRef(false);

  const closeModalContact = useCloseModal(id);
  const openModalSent = useOpenModal("sent");
  const isOpen = useSelector(state => state.modals[id].isOpen);

  async function checkSubmit(event) {
    event.preventDefault();
    // console.log("event:", event);
    if (!phoneInputValid.current) return;

    const email = document.getElementById("email")?.value ?? "";
    const name = document.getElementById("name")?.value ?? "";
    const media = document.getElementById("media")?.value ?? "";
    const link = document.getElementById("link")?.value ?? "";
    const project = document.getElementById("project")?.value ?? "";
    try {
      const formData = {
        name,
        description: project,
        email,
        contactType: media,
        contact: link,
        number: "",
      };

      const response = await $api.post("/feedback", formData, {
        headers: { "Project-Name": "paylect.com" },
      });

      console.log("API /feedback response", response.data);

      openModalSent();
      closeModalContact();
    } catch (e) {
      console.error(e);
    }
  }

  function statePhoneInput(state) {
    state ? (phoneInputValid.current = true) : (phoneInputValid.current = false);
  }

  // if (!isOpen) return null;

  return (
    <BackgroundModal isOpen={isOpen}>
      <S.ContactWrapper
        data-lenis-prevent
        id={id}
        style={animationModal(isOpen)}
      >
        <ContainerLarge>
          <form
            action="#"
            method="post"
            name=""
            id=""
            onSubmit={(event) => {
              checkSubmit(event);
            }}
          >
            <S.ContactBody>
              <S.ContactShell>
                <S.ContactTitle>
                  <ButtonClose action={closeModalContact} />
                  <span>Contact Us</span>
                  <S.Indent></S.Indent>
                </S.ContactTitle>
                <S.ContactText>
                  <S.ContactTextBlock>
                    <div>&#91; Disclaimer</div>
                    <div>
                      <span>Fill out the form to receive customized terms for your project</span>
                    </div>
                  </S.ContactTextBlock>
                </S.ContactText>
              </S.ContactShell>
              <div>

                <Input
                  type="text"
                  key="1"
                  name="name"
                  id="name"
                  placeholder="Enter your name *"
                  required
                  regexp='.{1,}'
                />

                <Input
                  type="text"
                  key="2"
                  name="email"
                  id="email"
                  placeholder="Enter your email *"
                  required
                  regexp='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                />


                <InputMedia statePhoneInput={statePhoneInput} />

                <Textarea
                  key="5"
                  name="project"
                  id="project"
                  placeholder="Describe your project *"
                  required
                  statePhoneInput={statePhoneInput}
                />

                <S.ContactTextForm>
                  <S.ContactText>
                    By clicking the "Send" button, you give your consent to the paylect
                    Administration to process and store your personal and other data provided in the
                    form above.
                  </S.ContactText>
                </S.ContactTextForm>
                <S.ContactButtonWrapper>
                  <Button type={"submit"} text="send" />
                </S.ContactButtonWrapper>
              </div>
            </S.ContactBody>
          </form>
        </ContainerLarge>
      </S.ContactWrapper>
    </BackgroundModal>
  );
}
