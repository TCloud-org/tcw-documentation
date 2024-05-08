import { HeadingLink } from "../../dataDisplayComponents/HeadingLink";
import { DocContainer } from "../../layoutComponents/DocContainer";

export const StepWorkflowSetupPage = () => {
  return (
    <DocContainer>
      <HeadingLink>Setup</HeadingLink>

      <HeadingLink level={2}>Set up a client</HeadingLink>
    </DocContainer>
  );
};
