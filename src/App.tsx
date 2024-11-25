import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import face from "./assets/face.png";
import plan from "./assets/plan.png";
import progress from "./assets/progress.png";
import list from "./assets/list.png";
import deals from "./assets/deals.png";
import final from "./assets/final.png";
import boost1 from "./assets/boost1.png";
import boost2 from "./assets/boost2.png";
import boost3 from "./assets/boost3.png";
import boost4 from "./assets/boost4.png";
import boost5 from "./assets/boost5.png";
import boost6 from "./assets/boost6.png";
import { CrossCircleMIcon } from "@alfalab/icons-glyph/CrossCircleMIcon";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { ProgressBar } from "@alfalab/core-components/progress-bar";
import { Input } from "@alfalab/core-components/input";
import { AmountInput } from "@alfalab/core-components/amount-input";
import { Status } from "@alfalab/core-components/status";
import { Switch } from "@alfalab/core-components/switch";
import { BottomSheet } from "@alfalab/core-components/bottom-sheet";

interface Boost {
  image: string;
  title: string;
  description: boolean;
  descriptionText: string;
  popup: boolean;
  popupTextButton: string;
  popupText: string;
  status: boolean;
  statusColor: "green" | "orange" | "red" | "blue" | "grey" | "teal" | "purple";
  statusText: string;
}

const boosts: Array<Boost> = [
  {
    image: boost1,
    title: "Откройте Альфа-Вклад",
    description: false,
    descriptionText: "увеличьте свои вложения на 22,03% годовых",
    popup: true,
    popupTextButton: "Подробнее",
    popupText: "Увеличьте свои вложения на 22,03% годовых",
    status: true,
    statusColor: "green",
    statusText: "-1,5 мес. до мечты",
  },
  {
    image: boost2,
    title: "Откройте Альфа-Счёт",
    description: false,
    descriptionText: "увеличьте свои вложения на 22,03% годовых",
    popup: true,
    popupTextButton: "Подробнее",
    popupText: "Увеличьте свои вложения на 12,5% годовых",
    status: true,
    statusColor: "green",
    statusText: "-1 мес. до мечты",
  },
  {
    image: boost3,
    title: "Откройте кредитную карту",
    description: false,
    descriptionText: "увеличьте свои вложения на 22,03% годовых",
    popup: true,
    popupTextButton: "Подробнее",
    popupText: "Получите 60 дней без % на все",
    status: true,
    statusColor: "purple",
    statusText: "Сразу",
  },
  {
    image: boost4,
    title: "Порекомендуйте карту друзьям",
    description: false,
    descriptionText: "увеличьте свои вложения на 22,03% годовых",
    popup: true,
    popupTextButton: "Подробнее",
    popupText: "Заработайте от 1 000р за советы",
    status: true,
    statusColor: "green",
    statusText: "-1 нед. за каждого",
  },
  {
    image: boost5,
    title: "Используйте выгоду от кэшбэка",
    description: false,
    descriptionText: "увеличьте свои вложения на 22,03% годовых",
    popup: true,
    popupTextButton: "Подробнее",
    popupText: "Сэкономьте до 5 000р в месяц",
    status: true,
    statusColor: "green",
    statusText: "-2 мес. до мечты",
  },
  {
    image: boost6,
    title: "Узнайте о выгодных предложениях от партнеров",
    description: false,
    descriptionText: "увеличьте свои вложения на 22,03% годовых",
    popup: false,
    popupTextButton: "Подробнее",
    popupText: "Какой-то текст",
    status: true,
    statusColor: "blue",
    statusText: "Рекомендуем",
  },
];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [step, setStep] = useState(LS.getItem(LSKeys.Step, false) ? 3 : 1);
  const [progressValue, setProgressValue] = useState(
    LS.getItem(LSKeys.Step, false) ? 100 : 25,
  );
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [amountString, setAmountString] = useState("");
  const [wish, setWish] = useState("");
  const [wishes, setWishes] = useState<{ wish: string; amount: string }[]>(
    LS.getItem(LSKeys.Wishes, []) || [],
  );
  const [addWish, setAddWish] = useState(true);
  const [popupText, setPopupText] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [checked1, setChecked1] = useState<boolean>(false);
  const [checked2, setChecked2] = useState<boolean>(false);
  const [checked3, setChecked3] = useState<boolean>(false);
  const [checked4, setChecked4] = useState<boolean>(false);
  const [checked5, setChecked5] = useState<boolean>(false);
  const [checked6, setChecked6] = useState<boolean>(false);

  const getChecked = (index: number) => {
    const checkedArray = [
      { checked: checked1, setChecked: setChecked1 },
      { checked: checked2, setChecked: setChecked2 },
      { checked: checked3, setChecked: setChecked3 },
      { checked: checked4, setChecked: setChecked4 },
      { checked: checked5, setChecked: setChecked5 },
      { checked: checked6, setChecked: setChecked6 },
    ];

    return checkedArray[index];
  };

  const submit = () => {
    setLoading(true);
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Gap size={12} />
        <ProgressBar view="negative" size={8} value={progressValue} />
        {step === 1 && (
          <>
            <div className={appSt.box}>
              <Gap size={24} />
              <img src={face} alt="" className={appSt.face} />
              <Typography.TitleResponsive
                font="system"
                tag="h1"
                view="medium"
                weight="semibold"
              >
                Привет, я Альфа-Джин
              </Typography.TitleResponsive>
              <Gap size={4} />
              <Typography.Text tag="p" view="primary-medium" color="secondary">
                Помогу превратить ваши желания в цели, а цели – в реальность!
              </Typography.Text>
            </div>

            <Gap size={32} />

            <div className={appSt.benefits}>
              <div className={appSt.benefit}>
                <img
                  src={plan}
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: "cover" }}
                />
                <Typography.Text
                  tag="p"
                  view="primary-small"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  Сформировать план
                </Typography.Text>
              </div>
              <div className={appSt.benefit}>
                <img
                  src={progress}
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: "cover" }}
                />
                <Typography.Text
                  tag="p"
                  view="primary-small"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  Отслеживать прогресс
                </Typography.Text>
              </div>
              <div className={appSt.benefit}>
                <img
                  src={list}
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: "cover" }}
                />
                <Typography.Text
                  tag="p"
                  view="primary-small"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  Поделиться списком
                </Typography.Text>
              </div>
              <div className={appSt.benefit}>
                <img
                  src={deals}
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: "cover" }}
                />
                <Typography.Text
                  tag="p"
                  view="primary-small"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  Предложения от банка
                </Typography.Text>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className={appSt.box}>
              <Gap size={24} />

              <Typography.TitleResponsive
                font="system"
                tag="h1"
                view="medium"
                weight="semibold"
              >
                Создание вишлиста
              </Typography.TitleResponsive>
            </div>

            <Gap size={32} />

            <div className={appSt.name}>
              <div style={{ display: "flex" }}>
                <Typography.Text tag="p" view="primary-medium" weight="bold">
                  Название
                </Typography.Text>
              </div>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите текст"
                block={true}
                label="Например, День рождения"
                maxLength={25}
                hint="Минимум 1 символ, максимум 25"
                clear={true}
                onClear={() => setName("")}
              />

              <Gap size={32} />

              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography.Text tag="p" view="primary-medium" weight="bold">
                    Мои желания
                  </Typography.Text>
                  <Typography.Text tag="p" view="primary-medium">
                    {wishes.length}/4
                  </Typography.Text>
                </div>
                <Typography.Text tag="p" view="primary-small" color="secondary">
                  Добавьте до 4х желаний, остальное можно добавить потом
                </Typography.Text>
              </div>

              {wishes.length > 0 && !addWish && (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    {wishes.map((item) => {
                      return (
                        <div
                          className={appSt.gift}
                          key={item.amount + item.wish}
                        >
                          <div>
                            <Typography.Text
                              tag="p"
                              view="primary-medium"
                              style={{ marginBottom: "4px" }}
                            >
                              {item.wish}
                            </Typography.Text>
                            <Typography.Text
                              tag="p"
                              view="primary-small"
                              color="secondary"
                              style={{ marginBottom: 0 }}
                            >
                              {item.amount} руб.
                            </Typography.Text>
                          </div>
                          <CrossCircleMIcon
                            width={30}
                            height={30}
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setWishes(
                                wishes.filter((w) => w.wish !== item.wish),
                              )
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {!addWish && wishes.length < 4 && (
                <>
                  {wishes.length > 0 && <Gap size={16} />}
                  <div className={appSt.options}>
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      style={{ marginBottom: 0 }}
                      onClick={() => {
                        setAddWish(true);
                      }}
                    >
                      Добавить {wishes.length > 0 ? "еще" : ""} желание
                    </Typography.Text>
                  </div>
                </>
              )}
            </div>
          </>
        )}

        {step === 2 && addWish && (
          <>
            <>
              <Input
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                placeholder="Введите текст"
                block={true}
                label="Название желания"
                hint="Минимум 1 символ, максимум 25"
                maxLength={25}
                clear={true}
                onClear={() => {
                  setWish("");
                }}
              />
              <Gap size={12} />
              <AmountInput
                value={amount}
                onChange={(_, payload) => {
                  setAmount(payload.value as number);
                  setAmountString(payload.valueString);
                }}
                placeholder="Введите сумму"
                label="Стоимость"
                integersOnly={true}
                bold={false}
                block={true}
                minority={1}
                clear={amount !== 0}
                onClear={() => {
                  setAmount(0);
                  setAmountString("");
                }}
              />

              <Gap size={16} />

              <div style={{ display: "flex", gap: "1rem" }}>
                <ButtonMobile
                  block
                  view={"secondary"}
                  onClick={() => {
                    setAmount(0);
                    setAmountString("");
                    setWish("");
                    setAddWish(false);
                  }}
                  size="s"
                >
                  Отменить
                </ButtonMobile>
                <ButtonMobile
                  block
                  onClick={() => {
                    setWishes([...wishes, { wish, amount: amountString }]);
                    setAddWish(false);
                    setWish("");
                    setAmount(0);
                    setAmountString("");
                    setProgressValue(75);
                  }}
                  disabled={!wish || amount === 0}
                  view={"primary"}
                  size="s"
                >
                  Добавить
                </ButtonMobile>
              </div>
            </>
            <Gap size={16} />
          </>
        )}

        {step === 3 && (
          <>
            <div className={appSt.box}>
              <Gap size={24} />
              <img src={final} alt="" className={appSt.final} />
              <Typography.TitleResponsive
                font="system"
                tag="h1"
                view="medium"
                weight="semibold"
              >
                Поздравляем, вишлист создан!
              </Typography.TitleResponsive>
            </div>

            <Gap size={32} />

            <Typography.Text tag="p" view="primary-medium" weight="bold">
              Мои желания
            </Typography.Text>

              <>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {wishes.map((item) => {
                    return (
                      <div
                        className={appSt.finalWish}
                        key={item.amount + item.wish}
                      >
                        <div>
                          <Typography.Text
                            tag="p"
                            view="primary-medium"
                            style={{ marginBottom: "4px" }}
                          >
                            {item.wish}
                          </Typography.Text>
                          <Typography.Text
                            tag="p"
                            view="primary-small"
                            color="secondary"
                            style={{ marginBottom: 0 }}
                          >
                            {item.amount} руб.
                          </Typography.Text>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>

            <Gap size={32} />

            <Typography.Text tag="p" view="primary-medium" weight="bold">
              Ускорьте исполнение желаний
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small" color="secondary">
              Выберите дополнительные инструменты , чтобы исполнить мечту
              быстрее
            </Typography.Text>

            <Gap size={4} />

            <div className={appSt.boosts}>
              {boosts.map((boost, index) => (
                <div className={appSt.boost} key={index}>
                  <img
                    src={boost.image}
                    alt=""
                    width={50}
                    height={50}
                    style={{ display: "block", objectFit: "cover" }}
                  />
                  <div style={{ flex: "1 1" }}>
                    <Typography.Text
                      tag="p"
                      view="primary-medium"
                      weight="bold"
                      style={{ marginBottom: "4px" }}
                    >
                      {boost.title}
                    </Typography.Text>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "baseline",
                      }}
                    >
                      {boost.popup && (
                        <Typography.Text
                          tag="p"
                          view="secondary-medium"
                          color="secondary"
                          style={{
                            textDecoration: "underline",
                            marginBottom: "4px",
                          }}
                          onClick={() => {
                            setPopupText(boost.popupText);
                            setExpanded(true);
                          }}
                        >
                          {boost.popupTextButton}
                        </Typography.Text>
                      )}
                      {boost.status && (
                        <Status
                          size={20}
                          uppercase={false}
                          color={boost.statusColor}
                        >
                          {boost.statusText}
                        </Status>
                      )}
                    </div>
                    {boost.description && (
                      <Typography.Text
                        tag="p"
                        view="primary-small"
                        style={{ marginBottom: 0 }}
                      >
                        {boost.descriptionText}
                      </Typography.Text>
                    )}
                  </div>

                  <Switch
                    reversed={true}
                    checked={getChecked(index).checked}
                    onChange={() =>
                      getChecked(index).setChecked((prevState) => !prevState)
                    }
                  />
                </div>
              ))}
            </div>
          </>
        )}

        <BottomSheet
          trimTitle={false}
          open={expanded}
          onClose={() => setExpanded(false)}
          initialHeight="full"
          title={
            <Typography.Text tag="p" view="primary-medium">
              {popupText}
            </Typography.Text>
          }
        ></BottomSheet>
      </div>

      <Gap size={96} />

      {step === 1 && (
        <div className={appSt.bottomBtnThx}>
          <ButtonMobile
            block
            view="primary"
            onClick={() => {
              setStep(2);
              setProgressValue(50);
            }}
          >
            Начать
          </ButtonMobile>
        </div>
      )}

      {step === 2 && (
        <div className={appSt.bottomBtnThx}>
          <ButtonMobile
            disabled={wishes.length === 0 || name.length === 0}
            block
            view="primary"
            onClick={() => {
              setStep(3);
              LS.setItem(LSKeys.Step, true);
              LS.setItem(LSKeys.Wishes, wishes);
              setProgressValue(100);
            }}
          >
            Создать вишлист
          </ButtonMobile>
        </div>
      )}

      {step === 3 && (
        <div className={appSt.bottomBtnThx}>
          <ButtonMobile block view="primary" loading={loading} onClick={submit}>
            Далее
          </ButtonMobile>
        </div>
      )}
    </>
  );
};
