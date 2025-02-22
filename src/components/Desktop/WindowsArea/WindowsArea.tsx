import { useAtom } from 'jotai';
import { useEffect, useMemo } from 'preact/compat';
import styled from 'styled-components';
import { appsConfig } from '__/data/apps/apps-config';
import { activeAppStore, activeAppZIndexStore, openAppsStore, TApp } from '__/stores/apps.store';
import { Window } from '../Window/Window';

export const WindowsArea = () => {
  const [openApps] = useAtom(openAppsStore);
  const [activeApp] = useAtom(activeAppStore);
  const [activeAppZIndex, setActiveAppZIndex] = useAtom(activeAppZIndexStore);

  const appIDList = useMemo(() => Object.keys(appsConfig) as TApp[], []);

  // Update the active app Z Index here
  useEffect(() => {
    setActiveAppZIndex(activeAppZIndex + 2);
  }, [activeApp]);

  return (
    <Container>
      {appIDList.map(
        (appID) =>
          openApps[appID] &&
          appsConfig[appID].shouldOpenWindow && <Window key={appID} appID={appID} />,
      )}
    </Container>
  );
};

const Container = styled.section`
  display: block;
`;
