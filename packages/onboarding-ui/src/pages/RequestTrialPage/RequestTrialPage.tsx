import { css } from '@rocket.chat/css-in-js';
import { Box } from '@rocket.chat/fuselage';
import type { ComponentProps, ReactElement } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import { TitleHighlight } from '../../common/FormPageLayout.styles';
import { OnboardingLogoCloud } from '../../common/OnboardingLogo';
import RequestTrialForm from '../../forms/RequestTrialForm';
import Description from './Description';

type RequestTrialPageProps = ComponentProps<typeof RequestTrialForm>;

const RequestTrialPage = (props: RequestTrialPageProps): ReactElement => {
  const { t } = useTranslation();
  const pointer = css`
    cursor: pointer;
  `;

  return (
    <BackgroundLayer>
      <FormPageLayout
        logo={<OnboardingLogoCloud />}
        description={<Description />}
        title={
          <Trans i18nKey='page.requestTrial.title'>
            Request a <TitleHighlight>30-day Trial</TitleHighlight>
          </Trans>
        }
        subtitle={t('page.requestTrial.subtitle')}
      >
        <RequestTrialForm {...props} />
      </FormPageLayout>
    </BackgroundLayer>
  );
};

export default RequestTrialPage;
