import { Typography } from "@alfalab/core-components/typography";
import rocket from "../assets/rocket.png";
import { thxSt } from "./style.css";

export const ThxLayout = () => {
  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={rocket}
          width={135}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins
          weight="bold"
        >
          Спасибо, мы записали ваш ответ
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium">
          Сервис находится в разработке. Как только он будет доступен, мы
          обязательно вам сообщим.
        </Typography.Text>
      </div>
    </>
  );
};
