import { Box, Grid, Paper, Typography, styled } from "@mui/material";
import BookCards from "./BookCards";
import OverviewTab from "./OverviewTab";

const bookSummary = `"Atomic Habits" by James Clear is a transformative guide that unveils the incredible power of small habits for massive personal growth. Clear explores the science behind habit formation and illustrates how tiny changes can lead to remarkable results. Through engaging anecdotes and practical strategies, he empowers readers to harness the compound effect of daily habits. The book inspires a mindset shift, encouraging individuals to focus on systems rather than goals, fostering a sustainable path to success. Clear's insights redefine motivation and offer a roadmap for continuous improvement. Whether aspiring for professional success or personal well-being, "Atomic Habits" is a compelling catalyst for positive change.`;

const bookPreview = `T

1

The Surprising Power of Atomic Habits
HE FATE OF British Cycling changed one day in 2003. The
organization, which was the governing body for professional
cycling in Great Britain, had recently hired Dave Brailsford as its new
performance director. At the time, professional cyclists in Great Britain
had endured nearly one hundred years of mediocrity. Since 1908,
British riders had won just a single gold medal at the Olympic Games,
and they had fared even worse in cycling’s biggest race, the Tour de
France. In 110 years, no British cyclist had ever won the event.
In fact, the performance of British riders had been so
underwhelming that one of the top bike manufacturers in Europe
refused to sell bikes to the team because they were afraid that it would
hurt sales if other professionals saw the Brits using their gear.
Brailsford had been hired to put British Cycling on a new trajectory.
What made him different from previous coaches was his relentless
commitment to a strategy that he referred to as “the aggregation of
marginal gains,” which was the philosophy of searching for a tiny
margin of improvement in everything you do. Brailsford said, “The
whole principle came from the idea that if you broke down everything
you could think of that goes into riding a bike, and then improve it by 1
percent, you will get a significant increase when you put them all
together.”
Brailsford and his coaches began by making small adjustments you
might expect from a professional cycling team. They redesigned the
bike seats to make them more comfortable and rubbed alcohol on the
tires for a better grip. They asked riders to wear electrically heated
overshorts to maintain ideal muscle temperature while riding and used

biofeedback sensors to monitor how each athlete responded to a
particular workout. The team tested various fabrics in a wind tunnel
and had their outdoor riders switch to indoor racing suits, which
proved to be lighter and more aerodynamic.`;

const bookReview = `No Review Available as of now.`;

const PaperPane = styled(Paper)({
  padding: 30,
  height: 480,
  textAlign: "left",
  overflowY: "auto",
});

const bookSummaryCard = <PaperPane>{bookSummary}</PaperPane>;
const bookPreviewCard = (
  <PaperPane>
    <Typography>{bookPreview}</Typography>
  </PaperPane>
);
const bookReviewCard = <PaperPane>{bookReview}</PaperPane>;

export default function BookOverview() {
  return (
    <Box mx={"auto"} width={"90%"} marginTop="20px">
      <Grid container direction="row" spacing={5}>
        <Grid item xs={4} mt={10}>
          <BookCards
            bookData={[
              { bookName: "Atomic Habits", bookImage: "Atomic_Habits" },
            ]}
          />
        </Grid>
        <Grid item xs={8}>
          <OverviewTab
            displayData={{
              summary: bookSummaryCard,
              preview: bookPreviewCard,
              review: bookReviewCard,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}