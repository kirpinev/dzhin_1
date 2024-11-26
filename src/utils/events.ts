declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      e: "event",
      action: string,
      variant_name: Record<string, string>,
    ) => void;
  }
}

type WishPayload = {
  wishlist_name: string;
  wishlist_items: string;
};

export const sendWishToGA = async (payload: WishPayload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbxBHjMOuuZisAgPnTt2wMbSYqCfzhbhxbdWmQ24UoUxxc3auIDO24YfSElALPIhGjzL/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({
          date,
          ...payload,
          variant: "dzhin_1",
          form_name: "form1",
        }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};

type BoostPayload = {
  wishlist_name: string;
  wishlist_items: string;
  boost_list: string;
};

export const sendBoostToGA = async (payload: BoostPayload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbxBHjMOuuZisAgPnTt2wMbSYqCfzhbhxbdWmQ24UoUxxc3auIDO24YfSElALPIhGjzL/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({
          date,
          ...payload,
          variant: "dzhin_1",
          form_name: "form2",
        }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};
