import { t } from "elysia";


export const checkParamID = {
  params: t.Object({
    id: t.String({pattern: /^[0-9]+$/.source})
  })
};

export const checkQueryPage = {
  query: t.Object({
    page: t.String({pattern: /^\d+$/.source, default: '1'})
  })
};

