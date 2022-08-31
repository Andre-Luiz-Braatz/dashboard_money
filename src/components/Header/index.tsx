import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";
import { Container, Content } from "./styles";

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };
  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>
        <NewTransactionModal
          open={isNewTransactionModalOpen}
          onClose={handleCloseNewTransactionModal}
        />
      </Content>
    </Container>
  );
}
