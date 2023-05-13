import { vw, $borderColor } from "@/pages/admin/statistics/style";
import css from "styled-jsx/css";

export default css.global`
  .aside-article-item {
    width: 100%;
    height: ${vw(400)};
    .article-ranking-item {
      width: 100%;
      height: ${vw(38)};
      color: white !important;
      font-size: ${vw(18)};
      border-bottom: ${vw(2)} solid ${$borderColor};
      display: flex !important;
      justify-content: space-around !important;
      & > div {
        display: flex;
        width: 80%;
        .article-ranking-item_title {
          margin-left: ${vw(10)};
        }
      }
      .article-ranking-item_count {
        font-weight: 700;
        margin-right: ${vw(40)};
      }
    }
  }

  .server-mt-20 {
    margin-top: ${vw(20)};
  }
  .server-data-container {
    width: 100%;
    height: ${vw(245)};
  }

  .main-l {
    width: ${vw(750)};
    height: ${vw(240)};
  }

  .main-s {
    width: ${vw(500)};
    height: ${vw(240)};
  }
  .main-item {
    margin-top: ${vw(20)};
    display: flex;
    justify-content: space-between;
  }
  .main-left {
    width: ${vw(1350)};
  }
  .main-right {
    width: ${vw(450)};
  }
`;
