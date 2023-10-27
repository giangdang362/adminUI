import { AvatarDropdown, AvatarName, Question, SelectLang } from '@/components';
import { LinkOutlined } from '@ant-design/icons';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import { Link, history } from '@umijs/max';
import { ConfigProvider } from 'antd';
import { errorConfig } from './requestErrorConfig';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{ currentUser?: API.User }> {
  return {
    currentUser: undefined,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  console.log('🚀 ~ file: app.tsx:24 ~ initialState:', initialState);
  return {
    actionsRender: () => [<Question key="doc" />, <SelectLang key="SelectLang" />],
    avatarProps: {
      src: initialState?.currentUser?.avatarUrl,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    // waterMarkProps: {
    //   content: initialState?.currentUser?.name,
    // },
    // footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    bgLayoutImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      type ThemeData = {
        borderRadius: number;
        colorPrimary: string;
        Button?: {
          colorPrimary: string;
          algorithm?: boolean;
        };
      };

      // Customize primary_color
      const defaultData: ThemeData = {
        borderRadius: 6,
        colorPrimary: '#EF488E',
        Button: {
          colorPrimary: '#EF488E',
        },
      };
      return (
        <>
          {/* Add ConfigProvider to override css default of Antd */}
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: defaultData.colorPrimary,
                borderRadius: defaultData.borderRadius,
              },
              components: {
                Button: {
                  colorPrimary: defaultData.Button?.colorPrimary,
                  algorithm: defaultData.Button?.algorithm,
                },
                Progress: {
                  // can not apply primary color of progress
                  colorPrimaryBg: defaultData.Button?.colorPrimary,
                },
              },
            }}
          >
            {children}
            {/* {isDev && (
              <SettingDrawer
                disableUrlParams
                enableDarkTheme
                settings={initialState?.settings}
                onSettingChange={(settings) => {
                  setInitialState((preInitialState) => ({
                    ...preInitialState,
                    settings,
                  }));
                }}
              />
            )} */}
          </ConfigProvider>
        </>
      );
    },
    // ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */

const { API_BASE_URL } = process.env;
export const request: RequestConfig = {
  baseURL: API_BASE_URL || 'http://10.10.31.53:8686',
  ...errorConfig,
  headers: {},
};
