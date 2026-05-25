import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;

`;

const NavbarCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

const NavbarSearch = styled.div`
  width: 250px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  border-radius: 14px;
  background: #f1f5f9;
  cursor: pointer;
  transition: 0.3s;
 
  span {
    margin-left: 10px;
    font-size: 14px;
    color: #64748b;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

const Button = styled.button`
  padding: 10px 18px;
  border-radius: 12px;
  border: 1px solid rgba(2, 132, 199, 0.18);
  background: white;
  color: #0369a1;
  font-weight: 600;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  position: relative;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <h1>hi</h1>
      </NavbarLeft>

      <NavbarCenter>
        <ul>
          <li>Home</li>
          <li>Help</li>
          <li>About</li>
        </ul>

        <NavbarSearch>
          <span>Search ride...</span>
        </NavbarSearch>
      </NavbarCenter>

      <NavbarRight>
        <Button>
          Login
        </Button>

        <Button>
          Regiter
        </Button>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;