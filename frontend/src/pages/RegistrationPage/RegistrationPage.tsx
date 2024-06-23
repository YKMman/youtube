import { Registration } from "../../widgets";
// import * as classes from "./registration.module.scss";

const RegistrationPage = () => {
  return (
    <section className={classes.page}>
      <div className={`${classes.container} container`}>
        <Registration />
      </div>
    </section>
  );
};

export default RegistrationPage;
